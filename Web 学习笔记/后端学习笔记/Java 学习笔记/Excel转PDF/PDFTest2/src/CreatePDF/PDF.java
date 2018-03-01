package CreatePDF;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.util.ArrayList;

import org.apache.pdfbox.cos.COSDictionary;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType0Font;

public class PDF {

    /** 基本パス */
    private final String BASE_PATH = System.getProperty("user.dir");

    /** テンプレートファイルパス */
    private final String TEMPLATE_PATH = "/template/template.pdf";

    /** フォントファイルパス */
    private final String FONT_PATH = "/font/HGRSKP.TTF";

    /** ページの端からの内容の距離 */
    private final float PADDING = 20;

    /** テーブルの中で行の高さ */
    private final float TABLE_ROW_HEIGHT = 20;

    /** テーブルの中で行の開始Y座標 */
    private final float TABLE_ROW_START_TOP = 204;

    /** セル分割線のX座標 */
    private final float[] TABLE_GTID_COORD = {51, 71.5f, 121.4f, 213.3f, 259.1f, 294.3f, 329.45f, 356.45f, 383.5f,
        443.75f, 497.45f, 560.6f, 610.95f, 658.1f, 710.45f, 771.4f};

    /** format オブジェクト参照 */
    private final DecimalFormat format = new DecimalFormat("#,###.##");

    /** フォントオブジェクト参照 */
    private PDFont font;

    /** pageContentStream参照 */
    private PDPageContentStream cs;

    /** ドキュメント参照 */
    private PDDocument doc;

    /** pageCOSObject参照 */
    private COSDictionary pageCOSObject;

    /** PDFページサイズ */
    private PDRectangle rect;

    /** PDFページ高さ */
    private float pageHeight;

    /** テーブルの中で現在の行の上部Y座標 */
    private float curRowTop;

    /** テーブルの中で現在の行の下部Y座標 */
    private float curRowBottom;

    /** 損益金額会計 */
    private BigDecimal totalProfitAndLostAmount;

    /** 建玉管理料会計 */
    private BigDecimal totalManagementFee;

    /** 先頭の内容を繰り返すかどうか */
    private boolean isRepeatHeader;

    /**
     * PDF生成
     * @param outputPath   出力パス
     * @param pdfData      PDFデータ
     * @param repeatHeader オプション、先頭の内容を繰り返すかどうか。デフォルトは false。
     * @throws IOException
     */
    public void create(String outputPath, PDFData pdfData, boolean repeatHeader) throws IOException {
        isRepeatHeader = repeatHeader;

        // 損益金額と建玉管理料を会計
        ArrayList<TransactionData> tableData = pdfData.getTransactionData();
        totalProfitAndLostAmount = BigDecimal.ZERO;
        totalManagementFee = BigDecimal.ZERO;
        for (int i = 0, rowCount = tableData.size(); i < rowCount; i++) {
            TransactionData row = tableData.get(i);
            totalProfitAndLostAmount = totalProfitAndLostAmount.add(row.getProfitAndLostAmount());
            totalManagementFee = totalManagementFee.add(row.getManagementFee());
        }

        // load テンプレートファイル
        File file = new File(BASE_PATH + TEMPLATE_PATH);
        doc = PDDocument.load(file);

        // 日本語フォントの問題を解決する
        // File fontFile = new File("C:/Windows/Fonts/msgothic.ttc");
        // try (TrueTypeCollection collection = new TrueTypeCollection(fontFile)) {
        //     // Font名から取得
        //     font = PDType0Font.load(doc, collection.getFontByName("MS-PGothic"), true);

        // 日本語フォントの問題を解決する
        font = PDType0Font.load(doc, new File(BASE_PATH + FONT_PATH));

        try {
            // ページに必要な情報を取得する
            PDPage page = doc.getPage(0);
            rect = page.getBBox();
            pageHeight = rect.getHeight();
            pageCOSObject = new COSDictionary(page.getCOSObject());

            // 最初のページの contentStream
            cs = new PDPageContentStream(doc, page, PDPageContentStream.AppendMode.APPEND, false);

            // 開始描く
            draw(pdfData);

            // contentStream を閉める
            cs.close();

            // PDF保存する
            doc.save(outputPath);

        } finally {
            // ファイルフローを閉める
            doc.close();
        }
    }

    public void create(String outputPath, PDFData data) throws IOException {
        create(outputPath, data, false);
    }

    /**
     * PDF描く
     * @param pdfData      PDFデータ
     * @param startRow     開始描くのインデックス
     * @throws IOException
     */
    private void draw(PDFData pdfData, int startRow) throws IOException {
        // 先頭を描く
        cs.beginText();
        writeName(pdfData.getUserName());
        writeStartEndDate(pdfData.getStartDate(), pdfData.getEndDate());
        writeRightTopInfo(pdfData.getCreateDate(), pdfData.getStoreId(), pdfData.getAccountId());
        writeStatistics(totalProfitAndLostAmount, totalManagementFee, totalProfitAndLostAmount.add(totalManagementFee));
        cs.endText();

        // テーブルを描く
        ArrayList<TransactionData> tableData = pdfData.getTransactionData();
        int endRow = drawTable(tableData, startRow);

        // テーブルが描くって終了したかどうかを判断する
        if (endRow < tableData.size()) {
            // テーブルが終了していない場合、先頭からもう一度描画を開始する
            draw(pdfData, endRow);
        }
    }

    private void draw(PDFData pdfData) throws IOException {
        draw(pdfData, 0);
    }

    /**
     * テーブル描く
     * @param tableData    テーブルデータ
     * @param startRow     開始描画の行のインデックス
     * @return             描画行されたインデックスをかえします
     * @throws IOException
     */
    private int drawTable(ArrayList<TransactionData> tableData, int startRow) throws IOException {
        int fontSize = 8; // フォントのサイズ
        curRowTop = pageHeight - TABLE_ROW_START_TOP;

        cs.setStrokingColor(128, 128, 128); // 線の色
        cs.setNonStrokingColor(0, 0, 0); // フォントの色
        cs.setFont(font, fontSize); // フォントのサイズ

        int rowCount = tableData.size();
        for (int i = startRow; i < rowCount; i++) {
            curRowBottom = curRowTop - TABLE_ROW_HEIGHT;

            if (curRowBottom < PADDING) {
                // このページがいっぱいの場合は、新しいページを作成した。
                createNewPageContentStream();

                if (isRepeatHeader) {
                    // 先頭の内容を繰り返す必要がある場合は
                    // ここに戻ると現在描画の行のインデックス
                    return i;
                }

                // 先頭を繰り返す必要がない場合は
                // ここに新しいページの描画データをリセットする
                curRowTop = pageHeight - PADDING;
                curRowBottom = curRowTop - TABLE_ROW_HEIGHT;
                cs.setStrokingColor(128, 128, 128);
                cs.setNonStrokingColor(0, 0, 0);
                cs.setFont(font, fontSize);

                // 一番上の線を描く
                cs.moveTo(TABLE_GTID_COORD[0], curRowTop);
                cs.lineTo(TABLE_GTID_COORD[TABLE_GTID_COORD.length - 1], curRowTop);
            }

            // 一番下の線を描く
            cs.moveTo(TABLE_GTID_COORD[0], curRowBottom);
            cs.lineTo(TABLE_GTID_COORD[TABLE_GTID_COORD.length - 1], curRowBottom);
            // 一番左の線を描く
            cs.moveTo(TABLE_GTID_COORD[0], curRowTop);
            cs.lineTo(TABLE_GTID_COORD[0], curRowBottom);
            cs.stroke();

            TransactionData row = tableData.get(i);

            // beginText() 前に必ず stroke()
            cs.beginText();
            // テーブルデータの描画を開始する
            newLineAt(TABLE_GTID_COORD[1] - 3, curRowBottom + 6, String.valueOf(i + 1), "right", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[1], TABLE_GTID_COORD[2]), curRowBottom + 6, row.getDeliveryDate(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[2], TABLE_GTID_COORD[3]), curRowBottom + 6, row.getTradeDate(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[3], TABLE_GTID_COORD[4]), curRowBottom + 6, row.getContractedId(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[4], TABLE_GTID_COORD[5]), curRowBottom + 6, row.getCurrencyCode1(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[5], TABLE_GTID_COORD[6]), curRowBottom + 6, row.getCurrencyCode2(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[6], TABLE_GTID_COORD[7]), curRowBottom + 6, row.getTradingCategory(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[7], TABLE_GTID_COORD[8]), curRowBottom + 6, row.getBuyOrSell(), "center", fontSize);
            newLineAt(TABLE_GTID_COORD[9] - 3, curRowBottom + 6, numberToString(row.getContractedCount()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[10] - 3, curRowBottom + 6, numberToString(row.getContractedSingleCost()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[11] - 3, curRowBottom + 6, numberToString(row.getContractedCost()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[12] - 3, curRowBottom + 6, numberToString(row.getAverageAcquisionCost()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[13] - 3, curRowBottom + 6, numberToString(row.getProfitAndLostAmount()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[14] - 3, curRowBottom + 6, numberToString(row.getManagementFee()), "right", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[14], TABLE_GTID_COORD[15]), curRowBottom + 6, row.getNewContractedId(), "center", fontSize);
            cs.endText();

            for (int j = 0, colCount = 15; j < colCount; j++) {
                // 右の線を描く
                cs.moveTo(TABLE_GTID_COORD[j + 1], curRowTop);
                cs.lineTo(TABLE_GTID_COORD[j + 1], curRowBottom);
            }
            cs.stroke();

            curRowTop = curRowBottom;
        }

        return rowCount + 1;
    }

    /**
     * 新しいページを作成する
     * @throws IOException
     */
    private void createNewPageContentStream() throws IOException {
        PDPage page = isRepeatHeader ? new PDPage(new COSDictionary(pageCOSObject)) : new PDPage(rect);
        doc.addPage(page);
        if (cs != null) cs.close();
        cs = new PDPageContentStream(doc, page, PDPageContentStream.AppendMode.APPEND, false);
    }

    /**
     * 名前を描く
     * @param name         名前
     * @throws IOException
     */
    private void writeName(String name) throws IOException {
        cs.setFont(font, 14);
        cs.setNonStrokingColor(0, 0, 0);
        // 右揃え
        newLineAt(200, pageHeight - 100, name, "right", 14);
    }

    /**
     * 開始日付と終了日付を描く
     * @param startDate    開始日付
     * @param endDate      終了日付
     * @throws IOException
     */
    private void writeStartEndDate(String startDate, String endDate) throws IOException {
        cs.setFont(font, 8);
        cs.setNonStrokingColor(0, 0, 0);
        // 右揃え
        newLineAt(165, pageHeight - 183, startDate, "right", 8);
        newLineAt(255, pageHeight - 183, endDate, "right", 8);
    }

    /**
     * 右上隅の情報を描く
     * @param createDate   作成日付
     * @param storeId      部店ID
     * @param accountId    口座番号
     * @throws IOException
     */
    private void writeRightTopInfo(String createDate, String storeId, String accountId)
        throws IOException {
        cs.setFont(font, 8);
        cs.setNonStrokingColor(0, 0, 0);
        // 中揃え
        newLineAt(530, pageHeight - 62, createDate, "center", 8);
        newLineAt(635, pageHeight - 62, storeId, "center", 8);
        newLineAt(740, pageHeight - 62, accountId, "center", 8);
    }

    /**
     * 統計を描く
     * @param count1       統計数字１
     * @param count2       統計数字２
     * @param count3       統計数字３
     * @throws IOException
     */
    private void writeStatistics(BigDecimal count1, BigDecimal count2, BigDecimal count3) throws IOException {
        cs.setFont(font, 8);
        // 右揃え
        String text = numberToString(count1, true);
        newLineAt(651, pageHeight - 170, text, "right", 8);
        text = numberToString(count2, true);
        newLineAt(704, pageHeight - 170, text, "right", 8);
        text = numberToString(count3, true);
        newLineAt(765, pageHeight - 170, text, "right", 8);
    }

    /**
     * 数字を文字に変換する
     * @param num          数字
     * @param isMoney      お金のためにフォーマットされていますか
     * @return             書式設定された文字を返します
     * @throws IOException
     */
    private String numberToString(BigDecimal num, boolean isMoney) throws IOException {
        if (num.compareTo(BigDecimal.valueOf(0)) < 0) {
            cs.setNonStrokingColor(255, 0, 0);
        } else {
            cs.setNonStrokingColor(0, 0, 0);
        }
        return isMoney ? toMoney(num) : String.valueOf(num);
    }

    private String numberToString(BigDecimal num) throws IOException {
        return numberToString(num, false);
    }

    /**
     * フォントの幅を取得する
     * @param text         テキスト
     * @param fontSize     フォントサイズ
     * @return             テキストの幅を返します
     * @throws IOException
     */
    private float getStringWidth(String text, int fontSize) throws IOException {
        return font.getStringWidth(text) / 1000 * fontSize;
    }

    /**
     * テキストを描く
     * @param x            X座標
     * @param y            Y座標
     * @param text         テキスト
     * @param align        アライメント、値の範囲は、"left"、"center"、"right"。デフォルトは"left"。
     * @param fontSize     アライメントを指定する場合は、フォントサイズを指定する必要もあります。
     * @throws IOException
     */
    private void newLineAt(float x, float y, String text, String align, int fontSize)
        throws IOException {
        if (align.equals("center")) {
            x -= getStringWidth(text, fontSize) / 2;
        } else if (align.equals("right")) {
            x -= getStringWidth(text, fontSize);
        }

        // テキスト開始座標座、前のものに基づいて newLineAtOffset(x, y)
        cs.newLineAtOffset(x, y);
        cs.showText(text);
        cs.newLineAtOffset(-x, -y);
        cs.setNonStrokingColor(0, 0, 0);
    }

    /**
     * 数値を金額形式にフォーマットする
     * @param num 数字
     * @return    書式付きの数値を返します
     */
    private String toMoney(BigDecimal num) {
        return format.format(num);
    }

    /**
     *
     * @param a 開始値
     * @param b 終了値
     * @return  中間値に返します
     */
    private float getCenterValue(float a, float b) {
        return (b - a) / 2 + a;
    }
}
