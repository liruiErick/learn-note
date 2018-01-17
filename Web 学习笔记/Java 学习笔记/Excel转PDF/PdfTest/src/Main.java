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
        System.out.printf("完了、" + (endTime - startTime) + "ミリ秒がかかる");
    }

    public static void convert() throws Exception {
        String excelPath = new CreateExcel().create();
        new ConvertPdf().excel2Pdf(excelPath, OUTPUT_FILE_PATH);
    }
}
