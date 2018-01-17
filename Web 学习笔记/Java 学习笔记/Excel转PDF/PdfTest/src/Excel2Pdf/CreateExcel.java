package Excel2Pdf;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * @Discreption 既存のExcelテンプレートにより、テンプレートの内容を変更して新しいExcelを生成します
 */
public class CreateExcel {

    private static final String BASE_PATH = System.getProperty("user.dir");
    private static final String TEMPLATE_FILE_PATH = BASE_PATH + "/template/template.xlsx";
    private static final String OUTPUT_FILE_PATH = BASE_PATH + "/output/result.xlsx";

    public String create() throws IOException {
        // Excelテンプレートパス
        File fi = new File(TEMPLATE_FILE_PATH);
        FileInputStream fs = new FileInputStream(fi);
        // Excelテンプレートを読む
        XSSFWorkbook wb = new XSSFWorkbook(fs);

        // 処理Excel
        dealWithExcel(wb);

        // テンプレートの内容を変更して新しいテンプレートをイクスポートする
        FileOutputStream out = new FileOutputStream(OUTPUT_FILE_PATH);
        wb.write(out);
        out.close();
        wb.close();

        return OUTPUT_FILE_PATH;
    }

    private void dealWithExcel(XSSFWorkbook wb) {
        // テンプレートのすべての内容を読む
        XSSFSheet sheet = wb.getSheetAt(0);
        // フォームデータの変更
        XSSFCell cell = sheet.getRow(2).getCell(0);
        cell.setCellValue("白　様");
    }

    public static void main(String[] args) throws IOException {
        new CreateExcel().create();
    }
}
