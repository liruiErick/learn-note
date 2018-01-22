package CreatePDF;

import java.io.Serializable;
import java.util.ArrayList;

public class PDFData implements Serializable {

    /** ユーザー名前 */
    private String userName;

    /** 作成日 */
    private String createDate;

    /** 部店 */
    private String storeId;

    /** 口座番号 */
    private String accountId;

    /** 開始日付 */
    private String startDate;

    /** 終了日付 */
    private String endDate;

    /** 取引 Data */
    private ArrayList<TransactionData> transactionData;

    /**
     * @return userName
     */
    public String getUserName() {
        return userName;
    }

    /**
     * @param userName セットする userName
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * @return createDate
     */
    public String getCreateDate() {
        return createDate;
    }

    /**
     * @param createDate セットする createDate
     */
    public void setCreateDate(String createDate) {
        this.createDate = createDate;
    }

    /**
     * @return storeId
     */
    public String getStoreId() {
        return storeId;
    }

    /**
     * @param storeId セットする storeId
     */
    public void setStoreId(String storeId) {
        this.storeId = storeId;
    }

    /**
     * @return accountId
     */
    public String getAccountId() {
        return accountId;
    }

    /**
     * @param accountId セットする accountId
     */
    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    /**
     * @return startDate
     */
    public String getStartDate() {
        return startDate;
    }

    /**
     * @param startDate セットする startDate
     */
    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    /**
     * @return endDate
     */
    public String getEndDate() {
        return endDate;
    }

    /**
     * @param endDate セットする endDate
     */
    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    /**
     * @return transactionData
     */
    public ArrayList<TransactionData> getTransactionData() {
        return transactionData;
    }

    /**
     * @param transactionData セットする transactionData
     */
    public void setTransactionData(ArrayList<TransactionData> transactionData) {
        this.transactionData = transactionData;
    }
}
