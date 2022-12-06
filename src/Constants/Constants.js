
export const productDetails = [
    { 
        label: "Code", 
        type: [
            {
                placeHolder:"input"
            }
        ],
        id:1
    },
    {
        label: "Name", 
        type: [
            {
                placeHolder:"input"
            }
        ],
        id:2  
    },
    {
        label: "Category", 
        type: [
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Health", label: "Health" },
                    { value: "Life", label: "Life" },
                    { value: "Term", label: "Term" },
                    { value: "Group", label: "Group" }
                ]
            }
        ],
        id:3 
    },
    {
        label: "Country", 
        type: [
            {
                placeHolder:"dropdown",
                options : [
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
                ]
            }
        ],
        id:4 
    },
    {
        label: "Currency Code", 
        type: [
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Usa", label: "USD" },
                    { value: "Hongkong", label: "HKD" },
                    { value: "Indonesia", label: "IDR" },
                    { value: "Laotion", label: "LAK" },
                    { value: "Malaysia", label: "RM" },
                    { value: "Myanmar", label: "MMK" },
                    { value: "Philiphines", label: "PHP" },
                    { value: "Singapore", label: "SGD" },
                    { value: "Thailand", label: "THB" },
                    { value: "Vietname", label: "VND" },
                  ]
            },
            {
                placeHolder:"button"
            },
            {
                placeHolder:"list"
            }
        ],
        id:5 
    },
    {
        label: "Product End Date",
        type:[
            {
                placeHolder:"date"
            }
        ],
        id:6
    },
    {
        label: "Whether Promotion Applicable?", 
        type: [
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            },
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Full", label: "Full" },
                    { value: "Partial", label: "Partial" }
                ]
            },
            {
                placeHolder:"input"
            }
        ],
        id:7 
    },
    {
        label: "is the product plan based?",
        type:[
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ],
        id:8
    },
    {
        label: "Product extended to child?",
        type:[
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ]
            }
        ],
        id:9
    },
    {
        label: "Maximum Number of Beneficiaries allowed",
        type:[
            {
                placeHolder:"input"
            }
        ],
        id:10
    },
    {
        label: "Policy Term of the Product",
        type:[
            {
                placeHolder:"input"
            },
            {
                placeHolder:"dropdown",
                options : [
                    { value: "Year(s)", label: "Year(s)" },
                    { value: "Month(s)", label: "Month(s)" },
                    { value: "Week(s)", label: "Week(s)" },
                    { value: "Day(s)", label: "Day(s)" }
                ]
            }
        ],
        id:11
    }
];

export let currencyCode = [];
export let applicableBenefits=[];

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
