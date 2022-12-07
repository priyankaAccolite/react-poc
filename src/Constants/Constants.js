
export const productDetails = [
    {
        label: "Product Code",
        type: [
            {
                placeHolder: "input",
                enable: "n",
                placeHolderText: "S99999"
            }
        ],
        id: 1,
        mandatory: "n"
    },
    {
        label: "Name",
        type: [
            {
                placeHolder: "input",
                enable: "y"
            }
        ],
        id: 2,
        mandatory: "y"
    },
    {
        label: "Description",
        type: [
            {
                placeHolder: "input",
                enable: "y"
            }
        ],
        id: 3,
        mandatory: "y"
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
                    { value: "Group", label: "Group" }
                ],
                enable: "y",
                width: "200px"
            }
        ],
        id: 4,
        mandatory: "y"
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
                    { value: "Vietnam", label: "Vietnam" }
                ],
                enable: "y",
                width: "200px"
            },
            {
                label: "Currency Code",
                placeHolder: "input",
                enable: "n",
                mandatory: "n"
            }
        ],
        id: 5,
        mandatory: "y"
    },

    {
        label: "Product Sales End Date",
        type: [
            {
                placeHolder: "date",
                enable: "y"
            }
        ],
        id: 6,
        mandatory: "n"
    },
    {
        label: "Is Promotion Applicable?",
        type: [
            {
                placeHolder: "dropdown",
                options: [
                    { value: "Yes", label: "Yes", type:"ipa" },
                    { value: "No", label: "No" , type:"ipa"}
                ],
                enable: "y",
                width: "200px"
            },
            {
                label: "Promotion Redemption",
                placeHolder: "dropdown",
                options: [
                    { value: "Full", label: "Full" },
                    { value: "Partial", label: "Partial" }
                ],
                mandatory: "cm",
                enable: "ce",
                width: "200px"
            },
            {
                label: "Promotion Code",
                placeHolder: "input",
                placeHolderText: "Promo Code",
                enable: "n",
                mandatory: "n"
            }
        ],
        id: 7,
        mandatory: "n"
    },
    {
        label: "Product extended to child?",
        type: [
            {
                placeHolder: "dropdown",
                options: [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                enable: "y",
                width: "200px"
            }
        ],
        id: 8,
        mandatory: "y"
    },
    {
        label: "Maximum Number of Beneficiaries allowed",
        type: [
            {
                placeHolder: "input",
                enable: "y",
            }
        ],
        id: 9,
        mandatory: "y"
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
                    { value: "Day(s)", label: "Day(s)" }
                ],
                enable: "y",
                width: "200px"
            }
        ],
        id: 10,
        mandatory: "y"
    }
]

export const updateBenfitDetails = [
  {
    label: "Benefit Code",
    type: [{ label: "input", value: "", width: "200px" }],
  },
  {
    label: "Benefit Name",
    type: [{ label: "input", value: "", width: "470px" }],
  },
  {
    label: "Claim Template Type",
    type: [{ label: "input", value: "", width: "200px" }],
  },
  {
    label: "Waiting period",
    type: [
      { label: "input", value: "", width: "150px" },
      { label: "dropdown", value: "", width: "200px" },
    ],
  },

  {
    label: "Allowed Values for cause of event",
    type: [{ label: "dropdown", value: "", width: "206px" }],
  },
  {
    label: "Claimant Role",
    type: [{ label: "dropdown", value: "", width: "206px" }],
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
      { label: "dropdown", value: "", width: "200px" },
    ],
  },
  {
    label: "Refund Applicable",
    type: [{ label: "dropdown", value: "", width: "206px" }],
  },
  {
    label: "If Yes, Type of Refund",
    type: [{ label: "dropdown", value: "", width: "206px" }],
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
      },
    ],
    id: 20,
    mandatory: "y",
  },
  {
    label: "Free Peroid details",
    type: [
      {
        placeHolder: "input",
        enable: "n",
        width: "200px",
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
      },
    ],
    id: 22,
    mandatory: "y",
  },

  {
    label: "Upload Premium Table",

    id: 23,
    mandatory: "n",
  },
  {
    label: "Alter Premium Compute",
    type: [
      {
        placeHolder: "textField",
        enable: "n",
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
            { placeHolder: "input" , placeHolderText: "Min", enable: "y", width:"100px", marginRight:"75px", u_id:1},
            { placeHolder: "input" , placeHolderText: "Max", enable: "y", width:"105px", marginRight:"28px", u_id:2},
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
                width:"100px"
            },
            {

                placeHolder: "dropdownwithoutborder",
                options: [
                    { value: "National ID", label: "National ID" },
                    { value: "Email", label: "Email" },
                    { value: "F-Name+L-Name-DOB", label: "F-Name+L-Name-DOB" },
                ]
            }
        ],
        id: 12,
        mandatory: "y"
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
                width:"100px"
            },
            {
                placeHolder: "input",
                enable: "ce",
                width:"150px",
                marginRight:"0px",
                u_id:3
            },
            {
                placeHolder: "button",
                placeHolderText: "Add To List",
                enable: "ce"
            },
            {
                placeHolder: "list"
            }

        ],
        id: 13,
        mandatory: "n"

    },
    {
        label: "Limit against policy uniqueness criteria",
            type: [
                {
                    placeHolder: "input",
                    placeHolderText: "Count",
                    enable: "y",
                    width:"100px",
                    u_id:4
                },
                {
                    placeHolder: "dropdown",
                    options: [
                        { value: "National ID", label: "National ID" },
                        { value: "Email", label: "Email" },
                        { value: "F-Name + L-Name + DOB", label: "F-Name + L-Name + DOB" },
                    ],
                    enable: "y",
                    width:"150px",
                    marginRight:"0px"
                },
                {
                    placeHolder: "button",
                    placeHolderText: "Add To List",
                    enable: "ce"
                },
                {
                    placeHolder: "dropdownlist1"
                }
    
            ],
        id: 14,
        mandatory: "y"
    },
    {
        label: "Applicable External Validations",
        type: [
            {
                placeHolder: "input",
                placeHolderText: "Value",
                enable: "y",
                width:"100px",
                u_id:5
            },
            {
                placeHolder: "dropdown",
                options: [
                    { value: "Eligible National ID", label: "Eligible National ID" },
                    { value: "Billing Created", label: "Billing Created" },
                    { value: "Payment Not Auto", label: "Payment Not Autor" },
                    { value: "Maximum Benefit SA Check", label: "Maximum Benefit SA Check" },
                ],
                enable: "y",
                width:"150px",
                marginRight:"0px"
            },
            {
                placeHolder: "button",
                placeHolderText: "Add To List",
                enable: "ce"
            },
            {
                placeHolder: "dropdownlist2"
            }

        ],
    id: 15,
    mandatory: "n"
    },
    {
        label: "Applicable Transaction Validations",
        type: [
            {
                placeHolder: "dropdown",
                options: [
                    { value: "Minimum Policy Age Check", label: "Minimum Policy Age Check" },
                    { value: "Loan Applicable For the Product", label: "Loan Applicable For the Product" },
                ],
                enable: "y",
                width:"100px",
                marginRight: "0px"
            },
            {
                placeHolder: "input",
                placeHolderText: "Value",
                enable: "n",
                width:"80px",
                marginRight: "0px",
                u_id:6
            },
            {
                placeHolder: "dropdown",
                options: [
                    { value: "Sales", label: "Sales" },
                    { value: "Manual Renew", label: "Manual Renewd" },
                    { value: "Auto Renewal and Cancel Auto Renewal", label: "Auto Renewal and Cancel Auto Renewal" },
                    { value: "Cancel", label: "Cancel" },
                    { value: "Claims", label: "Claims" },
                    { value: "Policy Loan", label: "Policy Loan" },
                    { value: "Update Beneficiary Details", label: "Update Beneficiary Details" },
                    { value: "Reinstatement", label: "Reinstatement" },
                    { value: "Surrender", label: "Surrender" },
                    { value: "Update Contact Details", label: "Update Contact Details" },
                ],
                enable: "y",
                width:"150px",
                marginRight: "0px"
            },
            {
                placeHolder: "button",
                placeHolderText: "Add To List",
                enable: "ce"
            },
            {
                placeHolder: "dropdownlist3"
            }

        ],
    id: 16,
    mandatory: "n"
    }

]


export let currencyCode = [];
export let applicableBenefits=[];
export let otherLaValidations=[];
export let limitAgainstPolicy= [];
export let applicableExternalValidation = [];
export let applicableTransactionValidation = []

export const benefitDetails = [
    { 
        label: "Applicable Benefits *", 
        type: [
            {
                placeHolder:"dropdown",
                options : [
                    { value: "S00539", label: "S00539-Renewal Bonus Benefit" },
                    { value: "S00200", label: "S00200-SURRENDER" },
                    { value: "S00200", label: "S00200-Parent Coverage Benefit Rider" },
                    { value: "S00200", label: "S00200-AC50-Accelerated Critical Illness Rider" },
                    { value: "S00200", label: "S00200-AD50-Addditonal Critical Illness Rider" },
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
                    { value: "S00320", label: "S00320-General Hospital Services Benefit" },
                    { value: "S00321", label: "S00321-Insurance Benefit" },
                    { value: "S00322", label: "S00322-Additional Benefit 1" },
                    { value: "S00351", label: "S00351-MedicalBenefit" },
                    { value: "S00371", label: "S00371-ADB-Accidental Death Benefit" },
                    { value: "S00374", label: "S00374-RCCADD" },
                    { value: "S00375", label: "S00375-ADD-Accidental Death Dismemberment" },
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
                    { value: "S00557", label: "S00557-Infectious Disease Death Benefits" },
                    { value: "S00563", label: "S00563-CM-Critical Illness Multi-Stage Cancer Rider" },
                    { value: "S00567", label: "S00567-Daily Coverage Booster" },
                    { value: "S00569", label: "S00569-Referral Benefit" },
                    { value: "S00572", label: "S00572-AdditionalDeathBenefit" },
                    { value: "S00573", label: "S00573-AdditonalIllnessBenefit" },
                    { value: "S00592", label: "S00592-Emergency Benefit" },
                    { value: "S00653", label: "S00653-RCC-Accidental Death and Dismemberment" },
                    { value: "S00724", label: "S00724-RCC-Basic" },
                    { value: "S00800", label: "S00800-RECURRING" },
                    { value: "S00830", label: "S00830-PBTB Hospital Cash Allowance Benefit" },
                    { value: "S00900", label: "S00900-Renewals" }
                ],
                
            },
            {
                placeHolder:"button"
            },
            {
                placeHolder:"list"
            }
        ],
        id:16
    },
    {
        label: "Upload Plan Table *", 
        type: [
            {
                placeHolder:"upload"
            }
        ],
        id:17
    }
];

export const policyServicing = [
    { 
        label: "Applicable Policy Services *", 
        type: [
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Sales", label: "Sales" },
                    { value: "Manual Renew", label: "Manual Renew" },
                    { value: "Auto Renewal & Cancel Auto Renewal", label: "Auto Renewal & Cancel Auto Renewal" },
                    { value: "Cancel", label: "Cancel" },
                    { value: "Claims", label: "Claims" },
                    { value: "Policy Loan", label: "Policy Loan" },
                    { value: "Update Beneficiary details", label: "Update Beneficiary details" },
                    { value: "Reinstatement", label: "Reinstatement" },
                    { value: "Surrender", label: "Surrender" },
                    { value: "Update Contact details", label: "Update Contact details" },
                ]
            },
            {
                placeHolder:"button"
            },
            {
                placeHolder:"list"
            }
        ],
        id:25
    },
];
export let applicablePolicyServicing=[];
