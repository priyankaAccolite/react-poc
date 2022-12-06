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
      { label: "dropdown", value: "", width: "120px" },
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
      { label: "dropdown", value: "", width: "120px" },
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
