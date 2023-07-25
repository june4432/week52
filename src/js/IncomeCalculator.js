import taxTable from "../taxTable.json";

export const incomeTax = (taxableAmount, taxRate, familyCount, child7to20Count) => {

    const taxPeriodArray = taxTable['taxtable'].filter(function(elem){
        return (Number(taxableAmount) <= elem.maximum && Number(taxableAmount) >= elem.minimum)
    });

    //1천 초과 소득일 경우 1천에 해당하는 세금
    const taxOver100Million = Number(taxableAmount) > 10000000 ?
    Number(taxPeriodArray[0].defaultTaxAmount)
    + Math.ceil(((Number(taxableAmount) - Number(taxPeriodArray[0].minimum)-1) * Number(taxPeriodArray[0].salaryAdjustRate) * Number(taxPeriodArray[0].taxRate))/10)*10 : 0;

    //총부양가족수
    const totalFamilyCount = Number(familyCount) + Number(child7to20Count);

    //부양가족수에 따른 세액
    const taxByFamilyCount =  taxPeriodArray[0].tax[totalFamilyCount-1];

    //소득세 총합
    const incomeTaxAmount = Math.floor((taxOver100Million + taxByFamilyCount) * ( taxRate / 100 ) /10)*10;

    return incomeTaxAmount;
}

export const localIncomeTax = (taxableAmount, taxRate, familyCount, child7to20Count) => {
    return Math.floor(incomeTax(taxableAmount, taxRate, familyCount, child7to20Count) * 0.1 / 10) * 10;
}

export const natlPension = (taxableAmount) => {
    const natlPensionRate = 0.045;
    const natlPensionLowLimitMon = 350000;
    const natlPensionHighLimitMon = 5530000;

    const taxableSalary = taxableAmount == NaN ? 0 : taxableAmount;
    const natlPensionTargetMon = taxableSalary < natlPensionLowLimitMon ? natlPensionLowLimitMon
                                : taxableSalary > natlPensionHighLimitMon ? natlPensionHighLimitMon : taxableSalary;

    const natlPensionAmount = taxableSalary == 0 ? 0 : Math.floor((natlPensionTargetMon * natlPensionRate).toFixed(0) / 10) * 10;

    return natlPensionAmount;
}

export const healthIns = (taxableAmount) => {
    const healthInsuranceRate = 0.03545;
    const healthInsuranceLowLimitMon = 279256;
    const healthInsuranceHighLimitMon = 104536481;

    const taxableSalary = taxableAmount == NaN ? 0 : taxableAmount;
    const healthInsuranceTargetMon = taxableSalary < healthInsuranceLowLimitMon ? healthInsuranceLowLimitMon
                                    : taxableSalary > healthInsuranceHighLimitMon ? healthInsuranceHighLimitMon : taxableSalary;

    const healthInsuranceAmount = taxableSalary == 0 ? 0 : Math.floor((healthInsuranceTargetMon * healthInsuranceRate).toFixed(0) / 10) * 10;

    return healthInsuranceAmount;
    }

export const longTermIns = (taxableAmount) => {
    const longTermCareInsuranceRate = 0.12809591;
    return taxableAmount == 0 ? 0 : Math.floor((healthIns(taxableAmount) * longTermCareInsuranceRate).toFixed(0) / 10) * 10;
}

export const hiringIns = (taxableAmount) => {
    const hiringInsuranceRate = 0.009;
    const hiringInsuranceLowLimitMon = 279256;
    const hiringInsuranceHighLimitMon = 104536481;

    const taxableSalary = taxableAmount == NaN ? 0 : taxableAmount;
    const hiringInsuranceTargetMon = taxableSalary < hiringInsuranceLowLimitMon ? hiringInsuranceLowLimitMon
                                    : taxableSalary > hiringInsuranceHighLimitMon ? hiringInsuranceHighLimitMon : taxableSalary;

    const hiringInsuranceAmount = taxableSalary == 0 ? 0 : Math.floor( (hiringInsuranceTargetMon * hiringInsuranceRate).toFixed(0) / 10) * 10;

    return hiringInsuranceAmount;
}
