
export const productDetails = [
    {
        label: "Product Code",
        type: [
            {
                placeHolder: "input",
                enable: "n"
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
                enable: "y"
            },
            {
                label: "Currency Code",
                placeHolder: "dropdown",
                options: [
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
                ],
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
                    { value: "Yes", label: "Yes" },
                    { value: "No", label: "No" }
                ],
                enable: "y"
            },
            {
                label: "Promotion Redemption",
                placeHolder: "dropdown",
                options: [
                    { value: "Full", label: "Full" },
                    { value: "Partial", label: "Partial" }
                ],
                mandatory: "cm",
                enable: "ce"
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
            }
        ],
        id: 10,
        mandatory: "y"
    }
];

export const validation = [
    {
        label: "Applicable Age Limit for LA",
        type: [
            { placeHolder: "input" , placeHolderText: "Min", enable: "y"},
            { placeHolder: "input" , placeHolderText: "Max", enable: "y"},
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
                mandatory: "y"
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
                    { value: "Occupation", label: "Occupation" },
                    { value: "Smoker", label: "Smoker" },
                ],
                enable: "y"
            },
            {
                placeHolder: "input",
                enable: "ce"
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
                    enable: "y"
                },
                {
                    placeHolder: "dropdown",
                    options: [
                        { value: "National ID", label: "National ID" },
                        { value: "Email", label: "Email" },
                        { value: "F-Name + L-Name + DOB", label: "F-Name + L-Name + DOB" },
                    ],
                    enable: "y"
                },
                {
                    placeHolder: "button",
                    placeHolderText: "Add To List",
                    enable: "e"
                },
                {
                    placeHolder: "list"
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
                enable: "y"
            },
            {
                placeHolder: "dropdown",
                options: [
                    { value: "Eligible National ID", label: "Eligible National ID" },
                    { value: "Billing Created", label: "Billing Created" },
                    { value: "Payment Not Auto", label: "Payment Not Autor" },
                    { value: "Maximum Benefit SA Check", label: "Maximum Benefit SA Check" },
                ],
                enable: "y"
            },
            {
                placeHolder: "button",
                placeHolderText: "Add To List",
                enable: "e"
            },
            {
                placeHolder: "list"
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
                enable: "y"
            },
            {
                placeHolder: "input",
                placeHolderText: "Value",
                enable: "n"
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
                enable: "y"
            },
            {
                placeHolder: "button",
                placeHolderText: "Add To List",
                enable: "e"
            },
            {
                placeHolder: "list"
            }

        ],
    id: 16,
    mandatory: "n"
    }

]


export let currencyCode = [];
