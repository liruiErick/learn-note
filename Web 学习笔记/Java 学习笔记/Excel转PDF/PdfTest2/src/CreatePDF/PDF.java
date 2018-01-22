package CreatePDF;

import java.io.File;
import java.io.IOException;
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

    private final String BASE_PATH = System.getProperty("user.dir");
    private final float PADDING = 20;
    private final float TABLE_GRID_HEIGHT = 20;
    private final float[] TABLE_GTID_COORD = {51, 71.5f, 121.4f, 213.3f, 259.1f, 294.3f, 329.45f, 356.45f, 383.5f,
        443.75f, 497.45f, 560.6f, 610.95f, 658.1f, 710.45f, 771.4f};

    private PDFData pdfData;
    private DecimalFormat format;
    private PDPageContentStream cs;
    private PDDocument doc;
    private COSDictionary pageCOSObject;
    private PDRectangle rect;
    private PDFont font;

    private int curDrawRow;
    private float pageWidth;
    private float pageHeight;
    private float tableTop;
    private float tableBottom;
    private double totalProfitAndLostAmount;
    private double totalManagementFee;
    private boolean isRepeatHeader;

    {
        format = new DecimalFormat(",###.##");
    }

    /**
     * PDF生成
     * @param outputPath 出力パス
     * @param data PDFデータ
     * @param repeatHeader オプション、先頭の内容を繰り返すかどうか。デフォルトは false。
     * @throws IOException
     */
    public void create(String outputPath, PDFData data, boolean repeatHeader) throws IOException {
        pdfData = data;
        ArrayList<TransactionData> tableData = pdfData.getTransactionData();
        isRepeatHeader = repeatHeader;
        curDrawRow = 0;
        totalProfitAndLostAmount = 0; // 損益金額会計
        totalManagementFee = 0; // 建玉管理料会計

        for (int i = 0, rowCount = tableData.size(); i < rowCount; i++) {
            TransactionData row = tableData.get(i);
            totalProfitAndLostAmount += row.getProfitAndLostAmount();
            totalManagementFee += row.getManagementFee();
        }

        File file = new File(BASE_PATH + "/template/template.pdf");
        doc = PDDocument.load(file);

        // フォントの問題を解決する
        font = PDType0Font.load(doc, new File(BASE_PATH + "/font/HGRSKP.TTF"));

        try {
            PDPage page = doc.getPage(0);
            rect = page.getBBox();
            pageWidth = rect.getWidth();
            pageHeight = rect.getHeight();
            pageCOSObject = new COSDictionary(page.getCOSObject());

            cs = new PDPageContentStream(doc, page, PDPageContentStream.AppendMode.APPEND, false);
            draw();
            cs.close();
            doc.save(outputPath);

        } finally {
            doc.close();
        }
    }

    public void create(String outputPath, PDFData data) throws IOException {
        create(outputPath, data, false);
    }

    private void draw() throws IOException {
        cs.beginText();

        writeName(pdfData.getUserName());
        writeStartEndDate(pdfData.getStartDate(), pdfData.getEndDate());
        writeRightTopInfo(pdfData.getCreateDate(), pdfData.getStoreId(), pdfData.getAccountId());
        writeStatistics(totalProfitAndLostAmount, totalManagementFee, totalProfitAndLostAmount + totalManagementFee);

        cs.endText();

        drawTable();
    }

    private void drawTable() throws IOException {
        int fontSize = 8;
        float x;
        tableTop = pageHeight - 204;

        cs.setStrokingColor(128, 128, 128);
        cs.setNonStrokingColor(0, 0, 0);
        cs.setFont(font, fontSize);

        ArrayList<TransactionData> tableData = pdfData.getTransactionData();

        for (int rowCount = tableData.size(); curDrawRow < rowCount; curDrawRow++) {
            tableBottom = tableTop - TABLE_GRID_HEIGHT;
            if (tableBottom < PADDING) {
                createNewPageContentStream();

                if (isRepeatHeader) {
                    draw();
                    break;
                }

                tableTop = pageHeight - PADDING;
                tableBottom = tableTop - TABLE_GRID_HEIGHT;
                cs.setStrokingColor(128, 128, 128);
                cs.setNonStrokingColor(0, 0, 0);
                cs.setFont(font, fontSize);
                // 一番上の線を描く
                cs.moveTo(TABLE_GTID_COORD[0], tableTop);
                cs.lineTo(TABLE_GTID_COORD[TABLE_GTID_COORD.length - 1], tableTop);
            }

            // 一番下の線を描く
            cs.moveTo(TABLE_GTID_COORD[0], tableBottom);
            cs.lineTo(TABLE_GTID_COORD[TABLE_GTID_COORD.length - 1], tableBottom);
            // 一番左の線を描く
            x = TABLE_GTID_COORD[0];
            cs.moveTo(x, tableTop);
            cs.lineTo(x, tableBottom);
            cs.stroke();

            TransactionData row = tableData.get(curDrawRow);

            // beginText() 前に必ず stroke()
            cs.beginText();
            newLineAt(TABLE_GTID_COORD[1] - 3, tableBottom + 6, String.valueOf(curDrawRow + 1), "right", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[1], TABLE_GTID_COORD[2]), tableBottom + 6, row.getDeliveryDate(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[2], TABLE_GTID_COORD[3]), tableBottom + 6, row.getTradeDate(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[3], TABLE_GTID_COORD[4]), tableBottom + 6, row.getContractedId(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[4], TABLE_GTID_COORD[5]), tableBottom + 6, row.getCurrencyCode1(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[5], TABLE_GTID_COORD[6]), tableBottom + 6, row.getCurrencyCode2(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[6], TABLE_GTID_COORD[7]), tableBottom + 6, row.getTradingCategory(), "center", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[7], TABLE_GTID_COORD[8]), tableBottom + 6, row.getBuyOrSell(), "center", fontSize);
            newLineAt(TABLE_GTID_COORD[9] - 3, tableBottom + 6, numberToString(row.getContractedCount()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[10] - 3, tableBottom + 6, numberToString(row.getContractedSingleCost()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[11] - 3, tableBottom + 6, numberToString(row.getContractedCost()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[12] - 3, tableBottom + 6, numberToString(row.getAverageAcquisionCost()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[13] - 3, tableBottom + 6, numberToString(row.getProfitAndLostAmount()), "right", fontSize);
            newLineAt(TABLE_GTID_COORD[14] - 3, tableBottom + 6, numberToString(row.getManagementFee()), "right", fontSize);
            newLineAt(getCenterValue(TABLE_GTID_COORD[14], TABLE_GTID_COORD[15]), tableBottom + 6, row.getNewContractedId(), "center", fontSize);
            cs.endText();

            for (int j = 0, colCount = 15; j < colCount; j++) {
                // 右の線を描く
                x = TABLE_GTID_COORD[j + 1];
                cs.moveTo(x, tableTop);
                cs.lineTo(x, tableBottom);
            }
            cs.stroke();

            tableTop = tableBottom;
        }
    }

    private void createNewPageContentStream() throws IOException {
        PDPage page = isRepeatHeader ? new PDPage(new COSDictionary(pageCOSObject)) : new PDPage(rect);
        doc.addPage(page);
        if (cs != null) cs.close();
        cs = new PDPageContentStream(doc, page, PDPageContentStream.AppendMode.APPEND, false);
    }

    private void writeName(String name) throws IOException {
        cs.setFont(font, 14);
        cs.setNonStrokingColor(0, 0, 0);
        // 右揃え
        newLineAt(200, pageHeight - 100, name, "right", 14);
    }

    private void writeStartEndDate(String startDate, String endDate) throws IOException {
        cs.setFont(font, 8);
        cs.setNonStrokingColor(0, 0, 0);
        // 右揃え
        newLineAt(165, pageHeight - 183, startDate, "right", 8);
        newLineAt(255, pageHeight - 183, endDate, "right", 8);
    }

    private void writeRightTopInfo(String createDate, String shopNum, String accountNum)
        throws IOException {
        cs.setFont(font, 8);
        cs.setNonStrokingColor(0, 0, 0);
        // 中揃え
        newLineAt(530, pageHeight - 62, createDate, "center", 8);
        newLineAt(635, pageHeight - 62, shopNum, "center", 8);
        newLineAt(740, pageHeight - 62, accountNum, "center", 8);
    }

    private void writeStatistics(double count1, double count2, double count3) throws IOException {
        cs.setFont(font, 8);
        // 右揃え
        String text = numberToString(count1, true);
        newLineAt(651, pageHeight - 170, text, "right", 8);
        text = numberToString(count2, true);
        newLineAt(704, pageHeight - 170, text, "right", 8);
        text = numberToString(count3, true);
        newLineAt(765, pageHeight - 170, text, "right", 8);
    }

    private String numberToString(double num, boolean isMoney) throws IOException {
        if (num >= 0) {
            cs.setNonStrokingColor(0, 0, 0);
        } else {
            cs.setNonStrokingColor(255, 0, 0);
        }
        return isMoney ? toMoney(num) : String.valueOf(num);
    }

    private String numberToString(double num) throws IOException {
        return numberToString(num, false);
    }

    private float getStringWidth(String text, int fontSize) throws IOException {
        // フォントの幅を取得する
        return font.getStringWidth(text) / 1000 * fontSize;
    }

    private void newLineAt(float x, float y, String text, String align, int fontSize)
        throws IOException {
        if (align == "center") {
            x -= getStringWidth(text, fontSize) / 2;
        } else if (align == "right") {
            x -= getStringWidth(text, fontSize);
        }

        // テキスト開始座標座、前のものに基づいて newLineAtOffset(x, y)
        cs.newLineAtOffset(x, y);
        cs.showText(text);
        cs.newLineAtOffset(-x, -y);
        cs.setNonStrokingColor(0, 0, 0);
    }

    private String toMoney(double num) {
        return format.format(num);
    }

    private float getCenterValue(float a, float b) {
        return (b - a) / 2 + a;
    }
}
