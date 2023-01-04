export let benefitDetailsSkeleton={
	"id": "C002",
	"code": "S00309",
	"version": "A.3",
	"name": "$$value 16.2$$",
	"desc": "Protection for your family in case of your death",
	"relationshipTypeName": "$$value 16.7$$",
	"computeOverride": [],
	"behaviours": [
		{
			"transactionContextRef": "ALL-ANY-ALL",
			"displayIndex": 1,
			"displayName": "$$value 16.2$$",
			"isViewable": false,
			"minimum": 1,
			"default": 1,
			"maximum": 1
		}
	],
	"attributes": [
		{
			"name": "totalPremium",
			"dataType": "number",
			"value": null,
			"copyFromAttribute": "",
			"copyToChild": false,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": false,
						"displayIndex": 1,
						"visibleInCatalog": false,
						"displayName": "Premium"
					}
				}
			]
		},
		{
			"name": "isSelected",
			"dataType": "boolean",
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
						"displayIndex": 13,
						"visibleInCatalog": true,
						"displayName": "isSelected"
					},
					"allowedValues": []
				}
			]
		},
		{
			"name": "totalSumAssured",
			"dataType": "number",
			"value": null,
			"copyFromAttribute": "",
			"copyToChild": false,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": false,
						"displayIndex": 2,
						"visibleInCatalog": false,
						"displayName": "Maximum Sum Assured"
					}
				}
			]
		},
		{
			"name": "base_totalSumAssured",
			"dataType": "number",
			"value": null,
			"copyFromAttribute": "dummyTotalSumAssured",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 3,
						"visibleInCatalog": false,
						"displayName": "Base maximum Sum Assured"
					}
				}
			]
		},
		{
			"name": "base_policyTerm",
			"dataType": "number",
			"value": null,
			"copyFromAttribute": "policyTerm",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 4,
						"visibleInCatalog": false,
						"displayName": "Base Policy Term"
					}
				}
			]
		},
		{
			"name": "base_waitingPeriod",
			"dataType": "number",
			"value": "$$ Value of 16.4$$",
			"copyFromAttribute": "waitingPeriod",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 5,
						"visibleInCatalog": false,
						"displayName": "Base Waiting Period"
					}
				}
			]
		},
		{
			"name": "base_policyStatus",
			"dataType": "string",
			"value": null,
			"copyFromAttribute": "policyStatus",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 6,
						"visibleInCatalog": false,
						"displayName": "Base Policy Status"
					}
				}
			]
		},
		{
			"name": "policyStartDate",
			"dataType": "string",
			"value": null,
			"copyFromAttribute": "policyStartDate",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": false,
						"displayIndex": 8,
						"visibleInCatalog": false,
						"displayName": "Base Policy Start Date"
					}
				}
			]
		},
		{
			"name": "causeOfDeath",
			"dataType": "string",
			"value": null,
			"copyFromAttribute": "",
			"copyToChild": false,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 9,
						"visibleInCatalog": true,
						"displayName": "Cause Of Death"
					},
					"allowedValues": [
						{
							"displayValue": "$$Value of 16.5$$",
							"displayIndex": 1,
							"value": "$$Value of 16.5$$",
							"default": false
						}
					]
				}
			]
		},
		{
			"name": "claimantRole",
			"dataType": "string",
			"value": "Beneficiary",
			"copyFromAttribute": "",
			"copyToChild": false,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": false,
						"displayIndex": 12,
						"visibleInCatalog": true,
						"displayName": "Claimant Role"
					}
				}
			]
		},
		{
			"name": "base_claimSubmissionPeriod",
			"dataType": "number",
			"value": null,
			"copyFromAttribute": "claimSubmissionPeriod",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 11,
						"visibleInCatalog": false,
						"displayName": "Base Claim Submission Period"
					}
				}
			]
		},
		{
			"name": "claimSubmissionDate",
			"dataType": "string",
			"value": null,
			"copyFromAttribute": "",
			"copyToChild": false,
			"behaviours": [
				{
					"transactionContext": {
						"id": "CLAIMS-ANY-ALL"
					},
					"display": {
						"hidden": false,
						"displayIndex": 11,
						"visibleInCatalog": false,
						"displayName": "Claim Submission Date"
					}
				}
			]
		},
		{
			"name": "base_isIMApplicable",
			"dataType": "boolean",
			"value": null,
			"copyFromAttribute": "isIMApplicable",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "CLAIMS-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 12,
						"visibleInCatalog": false,
						"displayName": "base_isIMApplicable"
					}
				}
			]
		},
		{
			"name": "base_isIMSelected",
			"dataType": "boolean",
			"value": null,
			"copyFromAttribute": "isIMSelected",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "CLAIMS-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 13,
						"visibleInCatalog": false,
						"displayName": "base_isIMSelected"
					}
				}
			]
		},
		{
			"name": "base_IMRate",
			"dataType": "number",
			"value": null,
			"copyFromAttribute": "IMRate",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "CLAIMS-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 14,
						"visibleInCatalog": false,
						"displayName": "base_IMRate"
					}
				}
			]
		},
		{
			"name": "base_IMAllowedConditions",
			"dataType": "string",
			"value": null,
			"copyFromAttribute": "IMAllowedConditions",
			"copyToChild": true,
			"behaviours": [
				{
					"transactionContext": {
						"id": "CLAIMS-ANY-ALL"
					},
					"display": {
						"hidden": true,
						"displayIndex": 15,
						"visibleInCatalog": false,
						"displayName": "base_IMAllowedConditions"
					}
				}
			]
		},
		{
			"name": "claimTemplateType",
			"dataType": "string",
			"value": "$$value of 16.3",
			"copyFromAttribute": "",
			"copyToChild": false,
			"behaviours": [
				{
					"transactionContext": {
						"id": "ALL-ANY-ALL"
					},
					"display": {
						"hidden": false,
						"displayIndex": 16,
						"visibleInCatalog": false,
						"displayName": "claimTemplateType"
					}
				}
			]
		}
	]
}

export let T_PLAN_Details={
	"tableName": "T_PLANDETAILS",
	"tableType": null,
	"tableData": []
  }

  export let T_PREMIUM_Details={
	"tableName": "T_PREMIUM_DETAILS",
	"tableType": null,
	"tableData": []
  }



  export let insuredObjs_coverages_array=[];
  export let insuredObjs_coverages={
	"id": "",
	"name": "",
	"desc": "",
	"riderRef": "",
	"event": {
	  "name": "",
	  "desc": "",
	  "eventType": "",
	  "selectionCriteria": [
  
	  ]
	},
	"indemnities": [
	  {
		"id": "C001",
		"name": "",
		"desc": null,
		"addition": "CUMULATIVE",
		"type": "SIMPLE",
		"computes": [
		  {
			"type": "BENEFIT",
			"functionName": "F_Calculate_Benefit"
		  }
		],
		"selectionCriteria": [
  
		]
	  }
	]
  };

