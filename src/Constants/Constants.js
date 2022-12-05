
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
