export const limitAgainstPolicySkeletonMapper = [{
    "value": "National ID",
    "checkName": "MaxAllowedPoliciesPerLifeAssuredCheck"
},
{
    "value": "Email",
    "checkName": "MaxAllowedPoliciesPerEmailIdentifier"
},
{
    "value": "F-Name + L-Name + DOB",
    "checkName": "MaxAllowedPoliciesPerUniqueIdentifier"
}]


export let limitAgainstPolicySkeleton = {
    "tableName": "T_WORKFLOW_EXTERNAL_VALIDATIONS",
    "tableType": "EXTERNAL_VALIDATIONS",
    "tableData": []
}
export let externalValidationSkeleton = [];


export let transactionValidationSkeleton = {
    "tableName": "T_TRANSACTIONS_EXTERNAL_VALIDATIONS",
    "tableType": "TRANSACTIONS_VALIDATIONS",
    "tableData": []
}
export let minPolicyAgeCheck = {
    "ATTRIBUTE NAME": "$$Transaction$$",
    "ATTRIBUTE VALUE": "$$Value$$",
    "ATTRIBUTE CODES": ["$$Value$$"],
    "EXTERNAL CHECK NAME": "MinPolicyAgeCheck"
}

export let loanApplicable = {
    "ATTRIBUTE NAME": "POLICYLOAN",
    "ATTRIBUTE VALUE": 1,
    "EXTERNAL CHECK NAME": "IsLoanApplicableForProduct"
}