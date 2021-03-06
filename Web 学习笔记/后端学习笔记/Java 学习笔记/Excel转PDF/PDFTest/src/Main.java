import java.util.Date;

import Excel2Pdf.ConvertPdf;
import Excel2Pdf.CreateExcel;

public class Main {

    private static final String BASE_PATH = System.getProperty("user.dir");
    private static final String OUTPUT_FILE_PATH = BASE_PATH + "/output/result.pdf";

    public static void main(String[] args) throws Exception {
        long startTime = new Date().getTime();
        convert();
        long endTime = new Date().getTime();
        System.out.println("完了、" + (endTime - startTime) + "ミリ秒がかかる");
    }

    public static void convert() throws Exception {
        CreateExcel excel = new CreateExcel();
        new ConvertPdf().excel2Pdf(excel.getPath(), OUTPUT_FILE_PATH);
    }
}
