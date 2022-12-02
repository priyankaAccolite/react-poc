// export const options = [
//   { value: "C++", label: "C++" },
//   { value: "JAVA", label: "JAVA" },
//   { value: "Javascript", label: "Javascript" },
//   { value: "Python", label: "Python" },
//   { value: "Swift", label: "Swift" },
// ];
const productDetails = [
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
                placeHolder:"dropdown"
            }
        ],
        id:3 
    },
    {
        label: "Country", 
        type: [
            {
                placeHolder:"dropdown"
            }
        ],
        id:4 
    },
    {
        label: "Currency Code", 
        type: [
            {
                placeHolder:"dropdown"
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
                placeHolder:"dropdown"
            },
            {
                placeHolder:"dropdown"
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
                placeHolder:"dropdown"
            }
        ],
        id:8
    },
    {
        label: "Product extended to child?",
        type:[
            {
                placeHolder:"dropdown"
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
                placeHolder:"dropdown"
            }
        ],
        id:11
    }
];
export default productDetails
