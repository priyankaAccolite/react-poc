export const productDetails = [
  {
    label: "Product Code",
    type: [
      {
        placeHolder: "input",
        enable: "n",
        placeHolderText: "S99999",
      },
    ],
    id: 1,
    mandatory: "n",
  },
  {
    label: "Name",
    type: [
      {
        placeHolder: "input",
        enable: "y",
      },
    ],
    id: 2,
    mandatory: "y",
  },
  {
    label: "Description",
    type: [
      {
        placeHolder: "input",
        enable: "y",
      },
    ],
    id: 3,
    mandatory: "y",
  },
  {
    label: "Category",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "Health", label: "Health" },
          { value: "Life", label: "Life" },
          { value: "Term", label: "Term" },
          { value: "Group", label: "Group" },
        ],
        enable: "y",
        width: "225px",
      },
    ],
    id: 4,
    mandatory: "y",
  },
  {
    label: "Country",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "Cambodia", label: "Cambodia" },
          { value: "HongKong", label: "HongKong" },
          { value: "Indonesia", label: "Indonesia" },
          { value: "Laos", label: "Laos" },
          { value: "Malaysia", label: "Malaysia" },
          { value: "Myanmar", label: "Myanmar" },
          { value: "Philippines", label: "Philippines" },
          { value: "Singapore", label: "Singapore" },
          { value: "Thailand", label: "Thailand" },
          { value: "Vietnam", label: "Vietnam" },
        ],
        enable: "y",
        width: "225px",
      },
      {
        label: "Currency Code",
        placeHolder: "input",
        enable: "n",
        mandatory: "n",
        width: "167px"
      },
    ],
    id: 5,
    mandatory: "y",
  },

  {
    label: "Product Sales End Date",
    type: [
      {
        placeHolder: "date",
        enable: "y",
      },
    ],
    id: 6,
    mandatory: "n",
  },
  {
    label: "Is Promotion Applicable?",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "Yes", label: "Yes", type: "ipa" },
          { value: "No", label: "No", type: "ipa" },
        ],
        enable: "y",
        width: "225px",
      },
      {
        label: "Promotion Redemption",
        placeHolder: "dropdown",
        options: [
          { value: "Full", label: "Full" },
          { value: "Partial", label: "Partial" },
        ],
        mandatory: "cm",
        enable: "ce",
        width: "200px",
      },
      {
        label: "Promotion Code",
        placeHolder: "input",
        placeHolderText: "Promo Code",
        enable: "n",
        mandatory: "n",
        width: "162px"
      },
    ],
    id: 7,
    mandatory: "n",
  },
  {
    label: "Product extended to child?",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" },
        ],
        enable: "y",
        width: "225px",
      },
    ],
    id: 8,
    mandatory: "y",
  },
  {
    label: "Maximum Number of Beneficiaries allowed",
    type: [
      {
        placeHolder: "input",
        enable: "y",
      },
    ],
    id: 9,
    mandatory: "y",
  },
  {
    label: "Policy Term of the Product",
    type: [
      {
        placeHolder: "input",
        enable: "y",
      },
      {
        placeHolder: "dropdown",
        options: [
          { value: "Year(s)", label: "Year(s)" },
          { value: "Month(s)", label: "Month(s)" },
          { value: "Week(s)", label: "Week(s)" },
          { value: "Day(s)", label: "Day(s)" },
        ],
        enable: "y",
        width: "200px",
      },
    ],
    id: 10,
    mandatory: "y",
  },
];

export const updateBenfitDetails = [
  {
    label: "Benefit Code",
    enable:"n",
    type: [{ label: "input", value: "", width: "200px" }],
  },
  {
    label: "Benefit Name",
    mandatory:"y",
    type: [{ label: "input", value: "", width: "470px" }],
  },
  {
    label: "Claim Template Type",
    mandatory:"y",
    type: [{ label: "input", value: "", width: "200px" }],
  },
  {
    label: "Waiting period",
    mandatory:"y",
    type: [
      { label: "input", value: "", width: "150px" },
      {
        label: "dropdown",
        options: [
          { value: "Year(s)", label: "Year(s)" },
          { value: "Month(s)", label: "Month(s)" },
          { value: "Week(s)", label: "Week(s)" },
          { value: "Day(s)", label: "Day(s)" },
        ],
        value: "",
        width: "120px",
        enable: "y",
        fieldvalue: "",
      },
    ],
  },

  {
    label: "Allowed Values for cause of event",
    type: [
      {
        label: "dropdown",
        options: [
          { value: "Accident", label: "ACCIDENT" },
          { value: "Death", label: "DEATH" },
          { value: "Sucide", label: "SUICIDE" },
        ],
        value: "",
        width: "206px",
        enable: "y",
        fieldvalue: "",
      },
    ],
  },
  {
    label: "Claimant Role",
    mandatory:"y",
    type: [
      {
        label: "dropdown",
        options: [
          { value: "Lifeassured", label: "Lifeassured" },
          { value: "Beneficiary", label: "Beneficiary" },
        ],
        value: "",
        width: "206px",
      },
    ],
  },
  {
    label: "Benefit Type",
    mandatory:"y",
    type: [
      {
        label: "dropdown",
        options: [
          { value: "Baseplan", label: "BASEPLAN" },
          { value: "Rider", label: "RIDER" },
        ],
        value: "",
        width: "206px",
      },
    ],
  },
];

export const updatePolicyServiceDetails = [
  {
    label: "Policy Service",
    type: [{ label: "input", value: "", width: "200px" }],
  },
  {
    label: "Free Look Period",
    type: [
      { label: "input", value: "", width: "150px" },
      {
        label: "dropdown",
        options: [
          { value: "Year(s)", label: "Year(s)" },
          { value: "Month(s)", label: "Month(s)" },
          { value: "Week(s)", label: "Week(s)" },
          { value: "Day(s)", label: "Day(s)" },
        ],
        value: "",
        width: "120px",
        enable: "y",
        fieldvalue: "",
      },
    ],
  },
  {
    label: "Refund Applicable",
    type: [
      {
        label: "dropdown",
        options: [
          { value: "yes", label: "yes" },
          { value: "No", label: "No" },
        ],
        value: "",
        width: "206px",
        enable: "y",
        fieldvalue: "",
      },
    ],
  },
  {
    label: "If Yes, Type of Refund",
    type: [
      {
        label: "dropdown",
        options: [
          { value: "full", label: "full" },
          { value: "partial", label: "partial" },
        ],
        value: "",
        width: "206px",
        enable: "y",
        fieldvalue: "",
      },
    ],
  },

  {
    label: "If Partial, Refund Logic",
    type: [{ label: "textField", value: "", width: "900px" }],
  },
];

export const premiumDetails = [
  {
    label: "Premium-Type of Product",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "free", label: "free" },
          { value: "premium", label: "premium" },
          { value: "freemium", label: "freemium" },
        ],
        fieldvalue: "",
        enable: "y",
        width: "200px",
      },
    ],
    id: 18,
    mandatory: "y",
  },
  {
    label: "Is the premium Constant/Varies on other attributes",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "constant", label: "constant" },
          { value: "varies with attributes", label: "varies with attributes" },
        ],
        enable: "n",
        fieldvalue: "",
        width: "200px",
      },
    ],
    id: 19,
    mandatory: "y",
  },
  {
    label: "Premium Value if constant",
    type: [
      {
        placeHolder: "input",
        enable: "n",
        width: "200px",
        fieldvalue: "",
      },
    ],
    id: 20,
    mandatory: "y",
  },
  {
    label: " Free period details (Freemium)",
    type: [
      {
        placeHolder: "input",
        enable: "n",
        width: "200px",
        fieldvalue: "",
      },
      {
        placeHolder: "dropdown",
        options: [
          { value: "Year(s)", label: "Year(s)" },
          { value: "Month(s)", label: "Month(s)" },
          { value: "Week(s)", label: "Week(s)" },
          { value: "Day(s)", label: "Day(s)" },
        ],
        enable: "y",
        fieldvalue: "",

        width: "150px",
      },
    ],
    id: 21,
    mandatory: "y",
  },
  {
    label: "Premium Payment Frequency",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "Daily", label: "Daily" },
          { value: "Weekly", label: "Weekly" },
          { value: "Monthly", label: "Monthly" },
          { value: "Quarterly", label: "Quarterly" },
          { value: "Half-yearly", label: "Half-yearly" },
          { value: "Annually", label: "Annually" },
        ],
        enable: "y",
        width: "200px",
        fieldvalue: "",
      },
    ],
    id: 22,
    mandatory: "y",
  },

  {
    label: "Upload Premium Table",
    type: [
      {
        placeHolder: "upload",
      },
    ],
    id: 23,
    mandatory: "n",
  },
  {
    label: "Alter Premium Compute",
    type: [
      {
        placeHolder: "textField",
        enable: "n",
        fieldvalue: "",
      },
    ],
    id: 24,
    mandatory: "n",
  },
];

export const validation = [
  {
    label: "Applicable Age Limit for LA",
    type: [
      {
        placeHolder: "input",
        placeHolderText: "Min",
        enable: "y",
        width: "100px",
        marginRight: "75px",
        u_id: 1,
      },
      {
        placeHolder: "input",
        placeHolderText: "Max",
        enable: "y",
        width: "120px",
        marginRight: "105px",
        u_id: 2,
      },
      {
        label: "Calculation Basis",
        placeHolder: "dropdown",
        options: [
          { value: "ANB", label: "ANB" },
          { value: "ALB", label: "ALB" },
          { value: "ANrB", label: "ANrB" },
          { value: "ANBfrD", label: "ANBfrD" },
          { value: "ALBfrD", label: "ALBfrD" },
        ],
        enale: "y",
        mandatory: "y",
        width: "96px",
      },
      {
        placeHolder: "dropdownwithoutborder",
        options: [
          { value: "National ID", label: "National ID" },
          { value: "Email", label: "Email" },
          { value: "F-Name+L-Name-DOB", label: "F-Name+L-Name-DOB" },
        ],
      },
    ],
    id: 12,
    mandatory: "y",
  },
  {
    label: "Other LA Validations",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "Gender", label: "Gender" },
          { value: "Smoker", label: "Smoker" },
        ],
        enable: "y",
        width: "130px",
      },
      {
        placeHolder: "input",
        enable: "ce",
        width: "120px",
        marginRight: "0px",
        u_id: 3,
      },
      {
        placeHolder: "button",
        placeHolderText: "Add To List",
        enable: "ce",
      },
      {
        placeHolder: "list",
      },
    ],
    id: 13,
    mandatory: "n",
  },
  {
    label: "Limit against policy uniqueness criteria",
    type: [
      {
        placeHolder: "input",
        placeHolderText: "Count",
        enable: "y",
        width: "100px",
        u_id: 4,
      },
      {
        placeHolder: "dropdown",
        options: [
          { value: "National ID", label: "National ID" },
          { value: "Email", label: "Email" },
          { value: "F-Name + L-Name + DOB", label: "F-Name + L-Name + DOB" },
        ],
        enable: "y",
        width: "150px",
        marginRight: "0px",
      },
      {
        placeHolder: "button",
        placeHolderText: "Add To List",
        enable: "ce",
      },
      {
        placeHolder: "dropdownlist1",
      },
    ],
    id: 14,
    mandatory: "y",
  },
  {
    label: "Applicable External Validations",
    type: [
      {
        placeHolder: "input",
        placeHolderText: "Value",
        enable: "y",
        width: "100px",
        u_id: 5,
      },
      {
        placeHolder: "dropdown",
        options: [
          { value: "Eligible National ID", label: "Eligible National ID" },
          { value: "Billing Created", label: "Billing Created" },
          { value: "Payment Not Auto", label: "Payment Not Autor" },
          {
            value: "Maximum Benefit SA Check",
            label: "Maximum Benefit SA Check",
          },
        ],
        enable: "y",
        width: "150px",
        marginRight: "0px",
      },
      {
        placeHolder: "button",
        placeHolderText: "Add To List",
        enable: "ce",
      },
      {
        placeHolder: "dropdownlist2",
      },
    ],
    id: 15,
    mandatory: "n",
  },
  {
    label: "Applicable Transaction Validations",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          {
            value: "Minimum Policy Age Check",
            label: "Minimum Policy Age Check",
          },
          {
            value: "Loan Applicable For the Product",
            label: "Loan Applicable For the Product",
          },
        ],
        enable: "y",
        width: "130px",
        marginRight: "5px",
      },
      {
        placeHolder: "input",
        placeHolderText: "Value",
        enable: "n",
        width: "40px",
        marginRight: "5px",
        u_id: 6,
      },
      {
        placeHolder: "dropdown",
        options: [
          { value: "Sales", label: "Sales" },
          { value: "Manual Renew", label: "Manual Renewd" },
          {
            value: "Auto Renewal and Cancel Auto Renewal",
            label: "Auto Renewal and Cancel Auto Renewal",
          },
          { value: "Cancel", label: "Cancel" },
          { value: "Claims", label: "Claims" },
          { value: "Policy Loan", label: "Policy Loan" },
          {
            value: "Update Beneficiary Details",
            label: "Update Beneficiary Details",
          },
          { value: "Reinstatement", label: "Reinstatement" },
          { value: "Surrender", label: "Surrender" },
          { value: "Update Contact Details", label: "Update Contact Details" },
        ],
        enable: "y",
        width: "150px",
        marginRight: "0px",
      },
      {
        placeHolder: "button",
        placeHolderText: "Add To List",
        enable: "ce",
      },
      {
        placeHolder: "dropdownlist3",
      },
    ],
    id: 16,
    mandatory: "n",
  },
];

export let currencyCode = [];
export let applicableBenefits = [];
export let otherLaValidations = [];
export let limitAgainstPolicy = [];
export let applicableExternalValidation = [];
export let applicableTransactionValidation = [];

export const benefitDetails = [
  {
    label: "Applicable Benefits *",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "S00539", label: "S00539-Renewal Bonus Benefit" },
          { value: "S00200", label: "S00200-SURRENDER" },
          { value: "S00200", label: "S00200-Parent Coverage Benefit Rider" },
          {
            value: "S00200",
            label: "S00200-AC50-Accelerated Critical Illness Rider",
          },
          {
            value: "S00200",
            label: "S00200-AD50-Addditonal Critical Illness Rider",
          },
          { value: "S00287", label: "S00287-Waiver of Premium Rider for LCSI" },
          { value: "S00288", label: "S00288-SAFETY+RIDER" },
          { value: "S00289", label: "S00289-Additional Benefit 2" },
          { value: "S00290", label: "S00290-Additional Benefit 3" },
          { value: "S00304", label: "S00304-Risk" },
          { value: "S00307", label: "S00307-PregnancyBenefit" },
          { value: "S00309", label: "S00309-DeathBenefit" },
          { value: "S00310", label: "S00310-MiscarriageBenefit" },
          { value: "S00312", label: "S00312-TDPBenefit" },
          { value: "S00313", label: "S00313-DailyHospitalIncomeBenefit" },
          { value: "S00314", label: "S00314-Dismemberment" },
          { value: "S00315", label: "S00315-Hospital Services Benefit" },
          { value: "S00316", label: "S00316-Dental Benefit" },
          { value: "S00317", label: "S00317-OPD Benefit" },
          { value: "S00318", label: "S00318-DoctorConsultationBenefit" },
          { value: "S00319", label: "S00319-SpecialistConsultationBenefit" },
          {
            value: "S00320",
            label: "S00320-General Hospital Services Benefit",
          },
          { value: "S00321", label: "S00321-Insurance Benefit" },
          { value: "S00322", label: "S00322-Additional Benefit 1" },
          { value: "S00351", label: "S00351-MedicalBenefit" },
          { value: "S00371", label: "S00371-ADB-Accidental Death Benefit" },
          { value: "S00374", label: "S00374-RCCADD" },
          {
            value: "S00375",
            label: "S00375-ADD-Accidental Death Dismemberment",
          },
          { value: "S00382", label: "S00382-RCCADB" },
          { value: "S00425", label: "S00425-Mobile Protection Benefit" },
          { value: "S00432", label: "S00432-Gadget Protection Benefit" },
          { value: "S00433", label: "S00433-Home Protection Benefit" },
          { value: "S00434", label: "S00434-Term Protect" },
          { value: "S00435", label: "S00435-Breakdown Protection Benefit" },
          { value: "S00436", label: "S00436-Travel Benefit Basic" },
          { value: "S00437", label: "S00437-Travel Benefit Enhanced" },
          { value: "S00469", label: "S00469-Illness Benefit" },
          { value: "S00490", label: "S00490-Medical Benefit" },
          { value: "S00491", label: "S00491-AcceleratedDeathBenefit" },
          { value: "S00492", label: "S00492-AcceleratedTPDBenefit" },
          { value: "S00496", label: "S00496-Funeral Benefit" },
          { value: "S00498", label: "S00498-Payout Benefit" },
          { value: "S00502", label: "S00502-Critical Illness" },
          { value: "S00508", label: "S00508-Double Indemnity" },
          { value: "S00513", label: "S00513-DoctorConsultationBenefit" },
          { value: "S00514", label: "S00514-PrescriptiveMedicineBenefit" },
          { value: "S00526", label: "S00526-Coupon Benefit" },
          { value: "S00527", label: "S00527-ROP-Return Of Premium" },
          { value: "S00529", label: "S00529-Moneyback Benefit" },
          { value: "S00534", label: "S00534-Murder and Assault" },
          { value: "S00535", label: "S00535-Dangerous Sports Cover Benefit" },
          { value: "S00536", label: "S00536-Field Trip Coverage Benefit" },
          { value: "S00537", label: "S00537-LongTermHospitalisationBenefit" },
          { value: "S00538", label: "S00538-ICUBenefit" },
          { value: "S00543", label: "S00543-Premium Waiver Benefit" },
          { value: "S00546", label: "S00546-ComaBenefit" },
          { value: "S00547", label: "S00547-Hard Copy" },
          { value: "S00548", label: "S00548-SurgeryBenefit" },
          { value: "S00556", label: "S00556-Accidental Medical Reimbursement" },
          {
            value: "S00557",
            label: "S00557-Infectious Disease Death Benefits",
          },
          {
            value: "S00563",
            label: "S00563-CM-Critical Illness Multi-Stage Cancer Rider",
          },
          { value: "S00567", label: "S00567-Daily Coverage Booster" },
          { value: "S00569", label: "S00569-Referral Benefit" },
          { value: "S00572", label: "S00572-AdditionalDeathBenefit" },
          { value: "S00573", label: "S00573-AdditonalIllnessBenefit" },
          { value: "S00592", label: "S00592-Emergency Benefit" },
          {
            value: "S00653",
            label: "S00653-RCC-Accidental Death and Dismemberment",
          },
          { value: "S00724", label: "S00724-RCC-Basic" },
          { value: "S00800", label: "S00800-RECURRING" },
          {
            value: "S00830",
            label: "S00830-PBTB Hospital Cash Allowance Benefit",
          },
          { value: "S00900", label: "S00900-Renewals" },
        ],
        width: "276px"
      },
      {
        placeHolder: "button",
      },
      {
        placeHolder: "list",
      },
    ],
    id: 16
  },
  {
    label: "Upload Plan Table *",
    type: [
      {
        placeHolder: "upload",
      },
    ],
    id: 17,
  },
];

export const policyServicing = [
  {
    label: "Applicable Policy Services *",
    type: [
      {
        placeHolder: "dropdown",
        options: [
          { value: "Sales", label: "Sales" },
          { value: "Manual Renew", label: "Manual Renew" },
          {
            value: "Auto Renewal & Cancel Auto Renewal",
            label: "Auto Renewal & Cancel Auto Renewal",
          },
          { value: "Cancel", label: "Cancel" },
          { value: "Claims", label: "Claims" },
          { value: "Policy Loan", label: "Policy Loan" },
          {
            value: "Update Beneficiary details",
            label: "Update Beneficiary details",
          },
          { value: "Reinstatement", label: "Reinstatement" },
          { value: "Surrender", label: "Surrender" },
          { value: "Update Contact details", label: "Update Contact details" },
        ],
        width: "200px"
      },
      {
        placeHolder: "button",
      },
      {
        placeHolder: "list",
      },
    ],
    id: 25,
  },
];
export let applicablePolicyServicing = [];

export let checkProductAvailability = []

export let checkProductAvailabilityArgument = ["birthDate","email","firstName","lastName","nationalId","laMinAge","laMaxAge"]

export let BaseJson={
  "_id": "PRODUCT_DEFINITION/S00001/A.1",
  "documentType": "PRODUCT_DEFINITION",
  "code": "S00001",
  "version": "A.1",
  "shortName": "$FullName$",
  "fullName": "$FullName$",
  "desc": "$Desc$",
  "effectiveFrom": "$DateTime.Now$",
  "effectiveTo": "$DateTime.Now+10$",
  "toolVersion": "1.0.0.0",
  "offeringType": "CUSTOMEROFFERING",
  "canBeCloned": null,
  "isTemplate": null,
  "status": "Inprogress",
  "category": "$Category$",
  "LBU": {
    "id": 0,
    "distributingLOB": "DIGITAL",
    "distributingCurrency": "$Currency$"
  },
  "transactionContext": [
    {
      "id": "ALL-ANY-ALL",
      "transaction": "ALL",
      "transactionRole": "ANY",
      "transactionChannel": "ALL"
    },
    {
      "id": "SALES-ANY-ALL",
      "transaction": "SALES",
      "transactionRole": "ANY",
      "transactionChannel": "ALL"
    }
  ],
  "productDisplayBehaviour": {
    "transactionRef": "ALL-ANY-ALL",
    "visibleInFrontCatalog": null,
    "productGroupName": "$Category$",
    "productDisplayName": "$FullName$"
  },
  "salesPartner": {
    "channel": []
  },
  "attributes": [
    {
      "name": "totalPremium",
      "dataType": "number",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 1,
            "visibleInCatalog": false,
            "displayName": "Premium"
          },
          "allowedValues": []
        },
        {
          "transactionContext": {
            "id": "CLAIMS-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 1,
            "visibleInCatalog": false,
            "displayName": "Premium"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "totalSumAssured",
      "dataType": "number",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 7,
            "visibleInCatalog": false,
            "displayName": "Maximum Sum Assured"
          },
          "allowedValues": []
        },
        {
          "transactionContext": {
            "id": "CLAIMS-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 7,
            "visibleInCatalog": false,
            "displayName": "Maximum Sum Assured"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "policyTerm",
      "dataType": "number",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 23,
            "visibleInCatalog": false,
            "displayName": "Policy Term"
          },
          "allowedValues": [

          ]
        },
        {
          "transactionContext": {
            "id": "CLAIMS-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 23,
            "visibleInCatalog": false,
            "displayName": "Policy Term"
          },
          "allowedValues": [
      
          ]
        }
      ]
    },
    {
      "name": "policyTermUnit",
      "dataType": "string",
      "value": "Y",
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 24,
            "visibleInCatalog": false,
            "displayName": "Policy Term Unit"
          },
          "allowedValues": []
        },
        {
          "transactionContext": {
            "id": "CLAIMS-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 24,
            "visibleInCatalog": false,
            "displayName": "Policy Term Unit"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "planName",
      "dataType": "string",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 25,
            "visibleInCatalog": false,
            "displayName": "planName"
          },
          "allowedValues": []
        },
        {
          "transactionContext": {
            "id": "CLAIMS-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 25,
            "visibleInCatalog": false,
            "displayName": "planName"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "premiumFrequency",
      "dataType": "string",
      "value": "Annually",
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "ALL-ANY-ALL"
          },
          "display": {
            "hidden": true,
            "displayIndex": 2,
            "visibleInCatalog": false,
            "displayName": "Premium Frequency"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "policyStatus",
      "dataType": "string",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "ALL-ANY-ALL"
          },
          "display": {
            "hidden": true,
            "displayIndex": 20,
            "visibleInCatalog": false,
            "displayName": "Policy Status"
          },
          "allowedValues": [
          ]
        }
      ]
    },
    {
      "name": "pulseUniqueIdName",
      "dataType": "string",
      "value": "KTP_ID",
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 19,
            "visibleInCatalog": false,
            "displayName": "Pulse Unique Id Name"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "referralCode",
      "dataType": "string",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 19,
            "visibleInCatalog": false,
            "displayName": "Referral Code"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "retryInterval",
      "dataType": "number",
      "value": 5,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 20,
            "visibleInCatalog": false,
            "displayName": "Retry Interval"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "noOfRetries",
      "dataType": "number",
      "value": 2,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 21,
            "visibleInCatalog": false,
            "displayName": "Number Of Retries"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "noOfBeneficiaries",
      "dataType": "number",
      "value": 1,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 12,
            "visibleInCatalog": false,
            "displayName": "Number of Beneficiaries"
          },
          "allowedValues": []
        },
        {
          "transactionContext": {
            "id": "CLAIMS-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 12,
            "visibleInCatalog": false,
            "displayName": "Number of Beneficiaries"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "policyId",
      "dataType": "string",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "SALES-ANY-ALL"
          },
          "display": {
            "hidden": true,
            "displayIndex": 42,
            "visibleInCatalog": false,
            "displayName": "Policy Id"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "policyStartDate",
      "dataType": "string",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "ALL-ANY-ALL"
          },
          "display": {
            "hidden": true,
            "displayIndex": 9,
            "visibleInCatalog": false,
            "displayName": "Policy Start Date"
          },
          "allowedValues": []
        }
      ]
    },
    {
      "name": "eventDate",
      "dataType": "string",
      "value": null,
      "copyFromAttribute": null,
      "copyToChild": false,
      "behaviours": [
        {
          "transactionContext": {
            "id": "CLAIMS-ANY-ALL"
          },
          "display": {
            "hidden": false,
            "displayIndex": 14,
            "visibleInCatalog": true,
            "displayName": "Event Occured Date"
          },
          "allowedValues": []
        }
      ]
    }
  ],
  "components": [
    {
      "id": "C001",
      "code": "S00304",
      "version": null,
      "name": "RISK",
      "desc": "RISK",
      "relationshipTypeName": "INTERNAL",
      "computeOverride": null,
      "behaviours": [
        {
          "transactionContextRef": "ALL-ANY-ALL",
          "displayIndex": 2,
          "displayName": "RISK",
          "isViewable": false,
          "minimum": 1,
          "default": 1,
          "maximum": 1
        }
      ],
      "attributes": [
        {
          "name": "email",
          "dataType": "string",
          "value": null,
          "copyFromAttribute": null,
          "copyToChild": false,
          "behaviours": [
            {
              "transactionContext": {
                "id": "ALL-ANY-ALL"
              },
              "display": {
                "hidden": false,
                "displayIndex": 1,
                "visibleInCatalog": true,
                "displayName": "Email"
              }
            }
          ]
        },
        {
          "name": "birthDate",
          "dataType": "dateTime",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        },
        {
          "name": "age",
          "dataType": "number",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        },
        {
          "name": "gender",
          "dataType": "string",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        },
        {
          "name": "ktpId",
          "dataType": "string",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        },
        {
          "name": "nationalId",
          "dataType": "string",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        },
        {
          "name": "phone",
          "dataType": "string",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        },
        {
          "name": "firstName",
          "dataType": "string",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        },
        {
          "name": "lastName",
          "dataType": "string",
          "value": null,
          "copyFromAttribute": "",
          "copyToChild": false,
          "behaviours": null
        }
      ]
    }
  ],
  "insuredObjs": [
    {
      "id": 1,
      "name": "POLICYHOLDER",
      "desc": null,
      "type": "POLICYHOLDER",
      "selectionCriteria": [
        {
          "type": "INCLUSION",
          "functionName": "checkProductAvailability"
        }
      ],
      "coverages": []
    },
    // {
    //   "id": 1,
    //   "name": "POLICYHOLDER",
    //   "desc": null,
    //   "type": "POLICYHOLDER",
    //   "selectionCriteria": [
    //     {
    //       "type": "INCLUSION",
    //       "functionName": "checkProductAvailability"
    //     },
    //     {
    //       "type": "INCLUSION",
    //       "functionName": "checkProductAvailabilityWithMinor"
    //     },
    //     {
    //       "type": "INCLUSION",
    //       "functionName": "F_CheckCancelAvailability"
    //     }
    //   ],
    //   "coverages": [
    //     {
    //       "id": "COV001",
    //       "name": "DeathBenefit",
    //       "desc": "Protection for your family in case of your death",
    //       "riderRef": "S00309",
    //       "event": {
    //         "name": "DEATH",
    //         "desc": "Protection for your family in case of your death",
    //         "eventType": "DEATH",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND001",
    //           "name": "DeathBenefit",
    //           "desc": "Protection for your family in case of your death",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateDeathBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV002",
    //       "name": "TPDBenefit",
    //       "desc": "Protection against Temporary and Permanent Disability for your family",
    //       "riderRef": "S00312",
    //       "event": {
    //         "name": "TPD",
    //         "desc": "Protection against Temporary and Permanent Disability for your family",
    //         "eventType": "TPD",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND002",
    //           "name": "TPD",
    //           "desc": "Protection against Temporary and Permanent Disability for your family",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateTPDBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV003",
    //       "name": "DailyHospitalIncomeBenefit",
    //       "desc": "",
    //       "riderRef": "S00313",
    //       "event": {
    //         "name": "HOSPITALIZATION",
    //         "desc": "Complete payment in case of hospitalization upto 5 days and 3 times an year",
    //         "eventType": "HOSPITALIZATION",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND003",
    //           "name": "DailyHospitalIncomeBenefit",
    //           "desc": "Complete payment in case of hospitalization upto 5 days and 3 times an year",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateIPDBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV004",
    //       "name": "LongTermHospitalisationBenefit ",
    //       "desc": "In the event of hospitalisation,a daily cash benefit for each day at hospital confinement is paid to the insured",
    //       "riderRef": "S00537",
    //       "event": {
    //         "name": "HOSPITALIZATION",
    //         "desc": "In the event of hospitalization beyond 30 days,additional daily cash benefit for each day at hospital confinement is paid to the insured",
    //         "eventType": "HOSPITALIZATION",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND004",
    //           "name": "LongTermHospitalisationBenefit",
    //           "desc": "In the event of hospitalisation,a daily cash benefit for each day at hospital confinement is paid to the insured",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateIPDBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV005",
    //       "name": "ICUBenefit",
    //       "desc": "In the event of hospitalisation in an ICU, a daily cash benefit for each day at ICU confinement is paid to the insured",
    //       "riderRef": "S00538",
    //       "event": {
    //         "name": "ICU",
    //         "desc": "In the event of hospitalisation in an ICU, a daily cash benefit for each day at ICU confinement is paid to the insured",
    //         "eventType": "ICU",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND005",
    //           "name": "ICUBenefit",
    //           "desc": "Complete payment in case of hospitalization upto 5 days and 3 times an year",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateICUBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV006",
    //       "name": "Infectious Disease Death Benefit",
    //       "desc": "Additional protection for your family in case of your death due to infectious disease",
    //       "riderRef": "S00557",
    //       "event": {
    //         "name": "ILLNESSDEATH",
    //         "desc": "",
    //         "eventType": "ILLNESSDEATH",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND006",
    //           "name": "Infectious Disease Death Benefit",
    //           "desc": "Additional protection for your family in case of your death due to infectious disease",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateDeathIllnessBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV007",
    //       "name": "ADB - Accidental Death Benefit",
    //       "desc": "Accidental Death Benefit",
    //       "riderRef": "S00371",
    //       "event": {
    //         "name": "ACCIDENTALDEATH",
    //         "desc": "Protection for your family in case of accidental death",
    //         "eventType": "ACCIDENTALDEATH",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND007",
    //           "name": "ACCIDENTALDEATH",
    //           "desc": "Protection for your family in case of accidental death",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateADBBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV008",
    //       "name": "Illness Benefit",
    //       "desc": "Illness Benefit",
    //       "riderRef": "S00469",
    //       "event": {
    //         "name": "ILLNESS",
    //         "desc": "Protection for your family in case you are ill.",
    //         "eventType": "ILLNESS",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND008",
    //           "name": "ILLNESS Benefit",
    //           "desc": "Protection for your family in case of your illness",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateIllnessBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV009",
    //       "name": "MedicalBenefit",
    //       "desc": "Medical Benefit",
    //       "riderRef": "S00351",
    //       "event": {
    //         "name": "MEDICALREIMBURSEMENT",
    //         "desc": "Protection for your family in case you are ill.",
    //         "eventType": "MEDICALREIMBURSEMENT",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND009",
    //           "name": "MEDICALREIMBURSEMENT",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateMedicalBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0010",
    //       "name": "Funeral Benefit",
    //       "desc": "Funeral Benefit amount that is payable to the Funeral Service Provider",
    //       "riderRef": "S00496",
    //       "event": {
    //         "name": "DEATH",
    //         "desc": "",
    //         "eventType": "DEATH",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0010",
    //           "name": "FUNERAL",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateDeathBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0011",
    //       "name": "ADD - Accidental Death and Dismemberment",
    //       "desc": "Accidental Death and Dismemberment (ADD)",
    //       "riderRef": "S00375",
    //       "event": {
    //         "name": "ACCIDENT",
    //         "desc": "Protection for your family in case of Accidental Death Dismemberment",
    //         "eventType": "ACCIDENT",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0011",
    //           "name": "ACCIDENT",
    //           "desc": "Protection for your family in case of Accidental Death and Dismemberment",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateADDBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0012",
    //       "name": "Additional Illness Benefit",
    //       "desc": "",
    //       "riderRef": "S00573",
    //       "event": {
    //         "name": "ILLNESS",
    //         "desc": "",
    //         "eventType": "ILLNESS",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0012",
    //           "name": "Illness Benefit",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateIllnessBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0013",
    //       "name": "AdditionalDeathBenefit",
    //       "desc": "Protection for your family in case of your death",
    //       "riderRef": "S00572",
    //       "event": {
    //         "name": "DEATH",
    //         "desc": "Protection for your family in case of your death",
    //         "eventType": "DEATH",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0013",
    //           "name": "DEATH",
    //           "desc": "Protection for your family in case of your death",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateDeathBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0014",
    //       "name": "SurgeryBenefit",
    //       "desc": "Surgery Benefit provides a lumpsum benefit in case of a surgery as per policy norms",
    //       "riderRef": "S00548",
    //       "event": {
    //         "name": "SURGERY",
    //         "desc": "Surgery Benefit",
    //         "eventType": "SURGERY",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0014",
    //           "name": "SURGERY",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_Surgery"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0015",
    //       "name": "Hospital Service Benefit",
    //       "desc": "",
    //       "riderRef": "S00315",
    //       "event": {
    //         "name": "HOSPITALSERVICE",
    //         "desc": "Hospital Service Benefit",
    //         "eventType": "HOSPITALSERVICE",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0015",
    //           "name": "HOSPITALSERVICE",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_HospitalService"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0016",
    //       "name": "DentalBenefit",
    //       "desc": "",
    //       "riderRef": "S00316",
    //       "event": {
    //         "name": "DENTAL",
    //         "desc": "Dental Benefit",
    //         "eventType": "DENTAL",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0016",
    //           "name": "DENTAL",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_Dental"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0017",
    //       "name": "OPD Benefit",
    //       "desc": "",
    //       "riderRef": "S00317",
    //       "event": {
    //         "name": "OPD",
    //         "desc": "OPD Benefit",
    //         "eventType": "OPD",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0017",
    //           "name": "OPD",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_OPD"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0018",
    //       "name": "Emergency Benefit",
    //       "desc": "",
    //       "riderRef": "S00592",
    //       "event": {
    //         "name": "EMERGENCYTREATMENT",
    //         "desc": "Emergency Benefit",
    //         "eventType": "EMERGENCYTREATMENT",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0018",
    //           "name": "EMERGENCYTREATMENT",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_Emergency"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0019",
    //       "name": "CM Benefit",
    //       "desc": "",
    //       "riderRef": "S00563",
    //       "event": {
    //         "name": "CRITICALILLNESS",
    //         "desc": "CM Benefit",
    //         "eventType": "CRITICALILLNESS",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0019",
    //           "name": "CRITICALILLNESS",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_CM"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0020",
    //       "name": "DoctorConsultationBenefit",
    //       "desc": "Doctor Consultation Benefit",
    //       "riderRef": "S00318",
    //       "event": {
    //         "name": "CONSULTATION",
    //         "desc": "Doctor Consultation Benefit",
    //         "eventType": "CONSULTATION",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0020",
    //           "name": "CONSULTATION",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_Consultation"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0021",
    //       "name": "SpecialistConsultationBenefit",
    //       "desc": "Specialist Consultation Benefit",
    //       "riderRef": "S00318",
    //       "event": {
    //         "name": "CONSULTATION",
    //         "desc": "Specialist Consultation Benefit",
    //         "eventType": "CONSULTATION",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0021",
    //           "name": "CONSULTATION",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_Consultation"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0022",
    //       "name": "General Hospital Service Benefit",
    //       "desc": "",
    //       "riderRef": "S00320",
    //       "event": {
    //         "name": "HOSPITALSERVICE",
    //         "desc": "General Hospital Service Benefit",
    //         "eventType": "HOSPITALSERVICE",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0022",
    //           "name": "HOSPITALSERVICE",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateBenefit_HospitalService"
    //             }
    //           ],
    //           "selectionCriteria": null
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0023",
    //       "name": "Illness Benefit",
    //       "desc": "Illness Benefit",
    //       "riderRef": "S00469",
    //       "event": {
    //         "name": "ILLNESS",
    //         "desc": "Protection for your family in case you are ill.",
    //         "eventType": "ILLNESS",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0023",
    //           "name": "ILLNESS Benefit",
    //           "desc": "Protection for your family in case of your illness",
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateIllnessBenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     },
    //     {
    //       "id": "COV0024",
    //       "name": "Murder and Assault",
    //       "desc": "Personal Accident Insurance policy provides complete financial protection to the insured members against uncertainties such as accidental death, accidental bodily injuries, and partial/total disabilities, permanent as well as temporary disabilities resulting from an accident.",
    //       "riderRef": "S00534",
    //       "event": {
    //         "name": "MURDERASSAULT",
    //         "desc": "",
    //         "eventType": "MURDERASSAULT",
    //         "selectionCriteria": [
    //           {
    //             "type": "INCLUSION",
    //             "functionName": "F_checkPolicyAvailability"
    //           }
    //         ]
    //       },
    //       "indemnities": [
    //         {
    //           "id": "IND0024",
    //           "name": "MURDER",
    //           "desc": null,
    //           "addition": "CUMULATIVE",
    //           "type": "SIMPLE",
    //           "computes": [
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_Calculate_Benefit"
    //             },
    //             {
    //               "type": "BENEFIT",
    //               "functionName": "F_CalculateMABenefit"
    //             }
    //           ],
    //           "selectionCriteria": []
    //         }
    //       ]
    //     }
    //   ]
    // }
  ],
  "computes": {
    "allFunctionsDefinitions": "",
    "functionGroups": [
      {
				"type": "INCLUSION",
				"functions": [
					{
						"transactionContextRef": [
							"SALES-ANY-ALL"
						],
						"functionName": "checkProductAvailability",
						"functionBody": "",
						"input": [
							{
								"name": "birthDate",
								"attributeMapping": {
									"domainObjectMapping": "$..lifeAssured[0].dob",
									"source": null,
									"productCode": "S00304",
									"attributeName": "birthDate"
								}
							},
							{
								"name": "email",
								"attributeMapping": {
									"domainObjectMapping": "$..lifeAssured[0].contactDetails.EMAIL.value",
									"source": null,
									"productCode": "S00304",
									"attributeName": "email"
								}
							},
							{
								"name": "firstName",
								"attributeMapping": {
									"domainObjectMapping": "$..lifeAssured[0].firstName",
									"source": "",
									"productCode": "S00304",
									"attributeName": "firstName"
								}
							},
							{
								"name": "lastName",
								"attributeMapping": {
									"domainObjectMapping": "$..lifeAssured[0].surName",
									"source": "",
									"productCode": "S00304",
									"attributeName": "lastName"
								}
							},
							{
								"name": "nationalId",
								"attributeMapping": {
									"domainObjectMapping": "$..lifeAssured[0].externalIds.NATIONAL_ID",
									"source": "",
									"productCode": "S00304",
									"attributeName": "nationalId"
								}
							}
						],
						"output": {
							"name": "planInfo",
							"dataType": "jsonString"
						},
						"order": 0
					}
				]
			},
    ],
    "tables": [

    ]
  },
  "customerJourney": null,
  "questionnaire": null,
  "productDocumentTemplateMap": null,
  "productDocument": null,
  "auditDetail": {
    "createTime": "",
    "updateTime": "",
    "updateBy": ""
  }
};

export let fromPremium={"value":false,file:{}};
export let globalInsuredObjectsId={value:"0"};
