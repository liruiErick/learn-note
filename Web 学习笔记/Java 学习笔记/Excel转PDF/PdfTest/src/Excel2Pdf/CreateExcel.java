package Excel2Pdf;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFColor;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * @Discreption 既存のExcelテンプレートにより、テンプレートの内容を変更して新しいExcelを生成します
 */
public class CreateExcel {

    private static final String BASE_PATH = System.getProperty("user.dir");
    private static final String TEMPLATE_FILE_PATH = BASE_PATH + "/template/template.xlsx";
    private static final String OUTPUT_FILE_PATH = BASE_PATH + "/output/result.xlsx";
    XSSFWorkbook wb;

    public CreateExcel() throws IOException {
        create();
    }

    private void create() throws IOException {
        // Excelテンプレートパス
        File fi = new File(TEMPLATE_FILE_PATH);
        FileInputStream fs = new FileInputStream(fi);
        // Excelテンプレートを読む
        wb = new XSSFWorkbook(fs);

        // 処理Excel
        dealWithExcel(wb);

        // テンプレートの内容を変更して新しいテンプレートをイクスポートする
        FileOutputStream out = new FileOutputStream(OUTPUT_FILE_PATH);
        wb.write(out);
        out.close();
        wb.close();
    }

    private void dealWithExcel(XSSFWorkbook wb) {
        // テンプレートのすべての内容を読む
        XSSFSheet sheet = wb.getSheetAt(0);
        XSSFRow row;

        // フォームデータの変更
        row = sheet.getRow(0);
        setCellValue(row.getCell(10), "2018/1/17");
        setCellValue(row.getCell(12), "200");
        setCellValue(row.getCell(14), "130002");

        row = sheet.getRow(2);
        setCellValue(row.getCell(0), "白俊傑　様");

        // row = sheet.getRow(8);
        // setCellValue(row.getCell(12), "100"); // 損益金額
        // setCellValue(row.getCell(13), "200"); // 建玉管理料
        // setCellValue(row.getCell(14), "300"); // 差引金額

        row = sheet.getRow(9);
        setCellValue(row.getCell(0), "対象期間：2017年1月1日から2017年12月31日まで");

        int rowNum = 11;
        for (int i = 0; i < 24; i++) {
            row = sheet.getRow(rowNum + i);
            setCellValue(row.getCell(0), Integer.toString(i)); // 受渡日
            setCellValue(row.getCell(1), "2018/1/" + i); // 受渡日
            setCellValue(row.getCell(2), "2018/1/" + i + " 0:00:00"); // 約定日時
            setCellValue(row.getCell(3), "100554031"); // 約定番号
            setCellValue(row.getCell(4), "IOTA"); // 通貨 コード1
            setCellValue(row.getCell(5), "JPY"); // 通貨 コード2
            setCellValue(row.getCell(6), "決済"); // 取引区分
            setCellValue(row.getCell(7), "買"); // 売買区分
            setCellValue(row.getCell(8), "0.00087385"); // 約定数量
            setCellValue(row.getCell(9), "476970.73"); // 約定単価
            setCellValue(row.getCell(10), "417"); // 約定金額
            setCellValue(row.getCell(11), "474000"); // 平均取得単価
            setCellValue(row.getCell(12), "-3"); // 損益金額
            setCellValue(row.getCell(13), "-500"); // 建玉管理料
            setCellValue(row.getCell(14), "100454031"); // 新規約定番号
        }
    }

    private void setCellValue(XSSFCell cell, String value) {
        setCellValue(cell, value, true);
    }

    public String getPath() {
        return OUTPUT_FILE_PATH;
    }

    private void setCellValue(XSSFCell cell, String value, Boolean isRed) {
        XSSFCellStyle cellStyle = cell.getCellStyle();
        XSSFFont cellFont = cellStyle.getFont();
        XSSFColor color = new XSSFColor();
        color.setRGB(new byte[]{127, 127, 0});
        cellFont.setColor(color);
        System.out.println(cellFont);
        cellStyle.setFont(cellFont);
        cell.setCellStyle(cellStyle);
        // cell.setCellType(CellType.FORMULA);
        cell.setCellValue(value);
    }

    public static void main(String[] args) throws IOException {
        new CreateExcel();
    }
}
