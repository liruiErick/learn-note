import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;

import CreatePDF.PDF;
import CreatePDF.PDFData;
import CreatePDF.TransactionData;

public class Main {

    private static final String BASE_PATH = System.getProperty("user.dir");
    private static final String OUTPUT_FILE_PATH = BASE_PATH + "/output/result.pdf";

    private static PDFData pdfData;

    static {
        pdfData = new PDFData();

        pdfData.setUserName("白俊傑");
        pdfData.setCreateDate("2018年1月19日");
        pdfData.setStoreId("100");
        pdfData.setAccountId("130001");
        pdfData.setStartDate("2018年1月18日");
        pdfData.setEndDate("2018年1月19日");

        ArrayList<TransactionData> transactionData = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            TransactionData row = new TransactionData();

            row.setDeliveryDate("2017/10/1");
            row.setTradeDate("2017/10/1  0:00:00");
            row.setContractedId("100554031");
            row.setCurrencyCode1("BTC");
            row.setCurrencyCode2("JPY");
            row.setTradingCategory("決済");
            row.setBuyOrSell("買");
            row.setContractedCount(BigDecimal.valueOf(0.00087385));
            row.setContractedSingleCost(BigDecimal.valueOf(476970.73));
            row.setContractedCost(BigDecimal.valueOf(417));
            row.setAverageAcquisionCost(BigDecimal.valueOf(47400));
            row.setProfitAndLostAmount(BigDecimal.valueOf(-3));
            row.setManagementFee(BigDecimal.valueOf(-500));
            row.setNewContractedId("100454031");

            transactionData.add(row);
        }

        pdfData.setTransactionData(transactionData);
    }

    public static void main(String[] args) throws IOException {
        long startTime = new Date().getTime();
        PDF pdf = new PDF();
        pdf.create(OUTPUT_FILE_PATH, pdfData, true);
        long endTime = new Date().getTime();
        System.out.println("完了、" + (endTime - startTime) + "ミリ秒がかかる");
    }
}
