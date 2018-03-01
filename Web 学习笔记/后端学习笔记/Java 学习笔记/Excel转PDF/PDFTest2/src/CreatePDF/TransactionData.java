package CreatePDF;

import java.io.Serializable;
import java.math.BigDecimal;

public class TransactionData implements Serializable {

    /** 受渡日 */
    private String deliveryDate;

    /** 約定日時 */
    private String tradeDate;

    /** 通貨 コード1 */
    private String currencyCode1;

    /** 通貨 コード2 */
    private String currencyCode2;

    /** 取引区分 */
    private String tradingCategory;

    /** 売買区分 */
    private String buyOrSell;

    /** 約定数量 */
    private BigDecimal contractedCount;

    /** 約定単価 */
    private BigDecimal contractedSingleCost;

    /** 約定金額 */
    private BigDecimal contractedCost;

    /** 平均取得単価 */
    private BigDecimal averageAcquisionCost;

    /** 損益金額 */
    private BigDecimal profitAndLostAmount;

    /** 建玉管理料 */
    private BigDecimal managementFee;

    /** 約定番号 */
    private String contractedId;

    /** 新規約定番号 */
    private String newContractedId;

    /**
     * @return deliveryDate
     */
    public String getDeliveryDate() {
        return deliveryDate;
    }

    /**
     * @param deliveryDate セットする deliveryDate
     */
    public void setDeliveryDate(String deliveryDate) {
        this.deliveryDate = deliveryDate;
    }

    /**
     * @return tradeDate
     */
    public String getTradeDate() {
        return tradeDate;
    }

    /**
     * @param tradeDate セットする tradeDate
     */
    public void setTradeDate(String tradeDate) {
        this.tradeDate = tradeDate;
    }

    /**
     * @return currencyCode1
     */
    public String getCurrencyCode1() {
        return currencyCode1;
    }

    /**
     * @param currencyCode1 セットする currencyCode1
     */
    public void setCurrencyCode1(String currencyCode1) {
        this.currencyCode1 = currencyCode1;
    }

    /**
     * @return currencyCode2
     */
    public String getCurrencyCode2() {
        return currencyCode2;
    }

    /**
     * @param currencyCode2 セットする currencyCode2
     */
    public void setCurrencyCode2(String currencyCode2) {
        this.currencyCode2 = currencyCode2;
    }

    /**
     * @return tradingCategory
     */
    public String getTradingCategory() {
        return tradingCategory;
    }

    /**
     * @param tradingCategory セットする tradingCategory
     */
    public void setTradingCategory(String tradingCategory) {
        this.tradingCategory = tradingCategory;
    }

    /**
     * @return buyOrSell
     */
    public String getBuyOrSell() {
        return buyOrSell;
    }

    /**
     * @param buyOrSell セットする buyOrSell
     */
    public void setBuyOrSell(String buyOrSell) {
        this.buyOrSell = buyOrSell;
    }

    /**
     * @return contractedCount
     */
    public BigDecimal getContractedCount() {
        return contractedCount;
    }

    /**
     * @param contractedCount セットする contractedCount
     */
    public void setContractedCount(BigDecimal contractedCount) {
        this.contractedCount = contractedCount;
    }

    /**
     * @return contractedSingleCost
     */
    public BigDecimal getContractedSingleCost() {
        return contractedSingleCost;
    }

    /**
     * @param contractedSingleCost セットする contractedSingleCost
     */
    public void setContractedSingleCost(BigDecimal contractedSingleCost) {
        this.contractedSingleCost = contractedSingleCost;
    }

    /**
     * @return contractedCost
     */
    public BigDecimal getContractedCost() {
        return contractedCost;
    }

    /**
     * @param contractedCost セットする contractedCost
     */
    public void setContractedCost(BigDecimal contractedCost) {
        this.contractedCost = contractedCost;
    }

    /**
     * @return averageAcquisionCost
     */
    public BigDecimal getAverageAcquisionCost() {
        return averageAcquisionCost;
    }

    /**
     * @param averageAcquisionCost セットする averageAcquisionCost
     */
    public void setAverageAcquisionCost(BigDecimal averageAcquisionCost) {
        this.averageAcquisionCost = averageAcquisionCost;
    }

    /**
     * @return profitAndLostAmount
     */
    public BigDecimal getProfitAndLostAmount() {
        return profitAndLostAmount;
    }

    /**
     * @param profitAndLostAmount セットする profitAndLostAmount
     */
    public void setProfitAndLostAmount(BigDecimal profitAndLostAmount) {
        this.profitAndLostAmount = profitAndLostAmount;
    }

    /**
     * @return managementFee
     */
    public BigDecimal getManagementFee() {
        return managementFee;
    }

    /**
     * @param managementFee セットする managementFee
     */
    public void setManagementFee(BigDecimal managementFee) {
        this.managementFee = managementFee;
    }

    /**
     * @return contractedId
     */
    public String getContractedId() {
        return contractedId;
    }

    /**
     * @param contractedId セットする contractedId
     */
    public void setContractedId(String contractedId) {
        this.contractedId = contractedId;
    }

    /**
     * @return newContractedId
     */
    public String getNewContractedId() {
        return newContractedId;
    }

    /**
     * @param newContractedId セットする newContractedId
     */
    public void setNewContractedId(String newContractedId) {
        this.newContractedId = newContractedId;
    }
}
