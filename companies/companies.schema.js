
const CompanySchema = new Schema({
     name: {
          type: String,
          required: true
     }
     ,
     ticker: {
          type: String,
          required: true
     }

});

// {
//      "country": "US",
//           "description": "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft. The company's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart speaker. Apple's software includes the macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam acoustic fingerprint utility, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.",
//                "ipo": "1980-12-12",
//                     "sector": "Technology",
//                          "subsector": "Computer and Electronic Product Manufacturing",
//                               "name": "Apple Inc",
//                                    "ticker": "AAPL",
//                                         "weburl": "https://www.apple.com/",
//                                              "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
//                                                   "news": [
//                                                        "#newsid"
//                                                   ],
//                                                        "financials": {
//           "basic": {
//                "annual": {
//                     "currentRatio": [
//                          {
//                               "period": "2019-09-28",
//                               "v": 1.5401
//                          },
//                          {
//                               "period": "2018-09-29",
//                               "v": 1.1329
//                          }
//                     ],
//                          "salesPerShare": [
//                               {
//                                    "period": "2019-09-28",
//                                    "v": 55.9645
//                               },
//                               {
//                                    "period": "2018-09-29",
//                                    "v": 53.1178
//                               }
//                          ],
//                               "netMargin": [
//                                    {
//                                         "period": "2019-09-28",
//                                         "v": 0.2124
//                                    },
//                                    {
//                                         "period": "2018-09-29",
//                                         "v": 0.2241
//                                    }
//                               ]
//                }
//           },
//           "report": {
//                "bs": [
//                     {
//                          "concept": "us-gaap_CashAndCashEquivalentsAtCarryingValue",
//                          "unit": "usd",
//                          "label": "Cash and cash equivalents",
//                          "value": 23646000000.0
//                     },
//                     {
//                          "concept": "us-gaap_MarketableSecuritiesCurrent",
//                          "unit": "usd",
//                          "label": "Marketable securities",
//                          "value": 24658000000.0
//                     },
//                     {
//                          "concept": "us-gaap_AccountsReceivableNetCurrent",
//                          "unit": "usd",
//                          "label": "Accounts receivable, net",
//                          "value": 28184000000
//                     },
//                     {
//                          "concept": "us-gaap_InventoryNet",
//                          "unit": "usd",
//                          "label": "Inventories",
//                          "value": 4946000000
//                     },
//                     {
//                          "concept": "us-gaap_NontradeReceivablesCurrent",
//                          "unit": "usd",
//                          "label": "Vendor non-trade receivables",
//                          "value": 32748000000
//                     },
//                     {
//                          "concept": "us-gaap_OtherAssetsCurrent",
//                          "unit": "usd",
//                          "label": "Other current assets",
//                          "value": 21223000000
//                     },
//                     {
//                          "concept": "us-gaap_AssetsCurrent",
//                          "unit": "usd",
//                          "label": "Total current assets",
//                          "value": 135405000000
//                     },
//                     {
//                          "concept": "us-gaap_MarketableSecuritiesNoncurrent",
//                          "unit": "usd",
//                          "label": "Marketable securities",
//                          "value": 120805000000.0
//                     },
//                     {
//                          "concept": "us-gaap_PropertyPlantAndEquipmentNet",
//                          "unit": "usd",
//                          "label": "Property, plant and equipment, net",
//                          "value": 42117000000.0
//                     },
//                     {
//                          "concept": "us-gaap_OtherAssetsNoncurrent",
//                          "unit": "usd",
//                          "label": "Other non-current assets",
//                          "value": 54428000000
//                     },
//                     {
//                          "concept": "us-gaap_AssetsNoncurrent",
//                          "unit": "usd",
//                          "label": "Total non-current assets",
//                          "value": 217350000000
//                     },
//                     {
//                          "concept": "us-gaap_Assets",
//                          "unit": "usd",
//                          "label": "Total assets",
//                          "value": 352755000000
//                     },
//                     {
//                          "concept": "us-gaap_AccountsPayableCurrent",
//                          "unit": "usd",
//                          "label": "Accounts payable",
//                          "value": 64115000000
//                     },
//                     {
//                          "concept": "us-gaap_OtherLiabilitiesCurrent",
//                          "unit": "usd",
//                          "label": "Other current liabilities",
//                          "value": 60845000000
//                     },
//                     {
//                          "concept": "us-gaap_ContractWithCustomerLiabilityCurrent",
//                          "unit": "usd",
//                          "label": "Deferred revenue",
//                          "value": 7912000000
//                     },
//                     {
//                          "concept": "us-gaap_CommercialPaper",
//                          "unit": "usd",
//                          "label": "Commercial paper",
//                          "value": 9982000000
//                     },
//                     {
//                          "concept": "us-gaap_LongTermDebtCurrent",
//                          "unit": "usd",
//                          "label": "Term debt",
//                          "value": 11128000000.0
//                     },
//                     {
//                          "concept": "us-gaap_LiabilitiesCurrent",
//                          "unit": "usd",
//                          "label": "Total current liabilities",
//                          "value": 153982000000
//                     },
//                     {
//                          "concept": "us-gaap_LongTermDebtNoncurrent",
//                          "unit": "usd",
//                          "label": "Term debt",
//                          "value": 98959000000.0
//                     },
//                     {
//                          "concept": "us-gaap_OtherLiabilitiesNoncurrent",
//                          "unit": "usd",
//                          "label": "Other non-current liabilities",
//                          "value": 49142000000.0
//                     },
//                     {
//                          "concept": "us-gaap_LiabilitiesNoncurrent",
//                          "unit": "usd",
//                          "label": "Total non-current liabilities",
//                          "value": 148101000000
//                     },
//                     {
//                          "concept": "us-gaap_Liabilities",
//                          "unit": "usd",
//                          "label": "Total liabilities",
//                          "value": 302083000000
//                     },
//                     {
//                          "concept": "us-gaap_CommonStocksIncludingAdditionalPaidInCapital",
//                          "unit": "usd",
//                          "label": "Common stock and additional paid-in capital, $0.00001 par value: 50,400,000 shares authorized; 15,943,425 and 16,426,786 shares issued and outstanding, respectively",
//                          "value": 64849000000
//                     },
//                     {
//                          "concept": "us-gaap_RetainedEarningsAccumulatedDeficit",
//                          "unit": "usd",
//                          "label": "Retained earnings/(Accumulated deficit)",
//                          "value": -3068000000
//                     },
//                     {
//                          "concept": "us-gaap_AccumulatedOtherComprehensiveIncomeLossNetOfTax",
//                          "unit": "usd",
//                          "label": "Accumulated other comprehensive income/(loss)",
//                          "value": -11109000000
//                     },
//                     {
//                          "concept": "us-gaap_StockholdersEquity",
//                          "unit": "usd",
//                          "label": "Total shareholders\u2019 equity",
//                          "value": 50672000000.0
//                     },
//                     {
//                          "concept": "us-gaap_LiabilitiesAndStockholdersEquity",
//                          "unit": "usd",
//                          "label": "Total liabilities and shareholders\u2019 equity",
//                          "value": 352755000000
//                     }
//                ],
//                     "ic": [
//                          {
//                               "concept": "us-gaap_RevenueFromContractWithCustomerExcludingAssessedTax",
//                               "unit": "usd",
//                               "label": "Net sales",
//                               "value": 394328000000.0
//                          },
//                          {
//                               "concept": "us-gaap_CostOfGoodsAndServicesSold",
//                               "unit": "usd",
//                               "label": "Cost of sales",
//                               "value": 223546000000.0
//                          },
//                          {
//                               "concept": "us-gaap_GrossProfit",
//                               "unit": "usd",
//                               "label": "Gross margin",
//                               "value": 170782000000
//                          },
//                          {
//                               "concept": "us-gaap_ResearchAndDevelopmentExpense",
//                               "unit": "usd",
//                               "label": "Research and development",
//                               "value": 26251000000
//                          },
//                          {
//                               "concept": "us-gaap_SellingGeneralAndAdministrativeExpense",
//                               "unit": "usd",
//                               "label": "Selling, general and administrative",
//                               "value": 25094000000
//                          },
//                          {
//                               "concept": "us-gaap_OperatingExpenses",
//                               "unit": "usd",
//                               "label": "Total operating expenses",
//                               "value": 51345000000
//                          },
//                          {
//                               "concept": "us-gaap_OperatingIncomeLoss",
//                               "unit": "usd",
//                               "label": "Operating income",
//                               "value": 119437000000.0
//                          },
//                          {
//                               "concept": "us-gaap_NonoperatingIncomeExpense",
//                               "unit": "usd",
//                               "label": "Other income/(expense), net",
//                               "value": -334000000.0
//                          },
//                          {
//                               "concept": "us-gaap_IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest",
//                               "unit": "usd",
//                               "label": "Income before provision for income taxes",
//                               "value": 119103000000
//                          },
//                          {
//                               "concept": "us-gaap_IncomeTaxExpenseBenefit",
//                               "unit": "usd",
//                               "label": "Provision for income taxes",
//                               "value": 19300000000.0
//                          },
//                          {
//                               "concept": "us-gaap_NetIncomeLoss",
//                               "unit": "usd",
//                               "label": "Net income",
//                               "value": 99803000000.0
//                          },
//                          {
//                               "concept": "us-gaap_EarningsPerShareBasic",
//                               "unit": "usd/share",
//                               "label": "Basic (in dollars per share)",
//                               "value": 6.15
//                          },
//                          {
//                               "concept": "us-gaap_EarningsPerShareDiluted",
//                               "unit": "usd/share",
//                               "label": "Diluted (in dollars per share)",
//                               "value": 6.11
//                          },
//                          {
//                               "concept": "us-gaap_WeightedAverageNumberOfSharesOutstandingBasic",
//                               "unit": "shares",
//                               "label": "Basic (in shares)",
//                               "value": 16215963000.0
//                          },
//                          {
//                               "concept": "us-gaap_WeightedAverageNumberOfDilutedSharesOutstanding",
//                               "unit": "shares",
//                               "label": "Diluted (in shares)",
//                               "value": 16325819000.0
//                          },
//                          {
//                               "concept": "us-gaap_OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax",
//                               "unit": "usd",
//                               "label": "Change in foreign currency translation, net of tax",
//                               "value": -1511000000
//                          },
//                          {
//                               "concept": "aapl_OtherComprehensiveIncomeLossDerivativeInstrumentGainLossbeforeReclassificationafterTax",
//                               "unit": "usd",
//                               "label": "Change in fair value of derivative instruments",
//                               "value": 3212000000
//                          },
//                          {
//                               "concept": "aapl_OtherComprehensiveIncomeLossDerivativeInstrumentGainLossReclassificationAfterTax",
//                               "unit": "usd",
//                               "label": "Adjustment for net (gains)/losses realized and included in net income",
//                               "value": 1074000000
//                          },
//                          {
//                               "concept": "aapl_OtherComprehensiveIncomeLossDerivativeInstrumentGainLossafterReclassificationandTax",
//                               "unit": "usd",
//                               "label": "Total change in unrealized gains/losses on derivative instruments",
//                               "value": 2138000000
//                          },
//                          {
//                               "concept": "us-gaap_OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax",
//                               "unit": "usd",
//                               "label": "Change in fair value of marketable debt securities",
//                               "value": -12104000000
//                          },
//                          {
//                               "concept": "us-gaap_OtherComprehensiveIncomeLossReclassificationAdjustmentFromAOCIForSaleOfSecuritiesNetOfTax",
//                               "unit": "usd",
//                               "label": "Adjustment for net (gains)/losses realized and included in net income",
//                               "value": -205000000
//                          },
//                          {
//                               "concept": "us-gaap_OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax",
//                               "unit": "usd",
//                               "label": "Total change in unrealized gains/losses on marketable debt securities",
//                               "value": -11899000000
//                          },
//                          {
//                               "concept": "us-gaap_OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent",
//                               "unit": "usd",
//                               "label": "Total other comprehensive income/(loss)",
//                               "value": -11272000000
//                          },
//                          {
//                               "concept": "us-gaap_ComprehensiveIncomeNetOfTax",
//                               "unit": "usd",
//                               "label": "Total comprehensive income",
//                               "value": 88531000000
//                          }
//                     ],
//                          "cf": [
//                               {
//                                    "concept": "us-gaap_NetIncomeLoss",
//                                    "unit": "usd",
//                                    "label": "Net income",
//                                    "value": 99803000000.0
//                               },
//                               {
//                                    "concept": "us-gaap_DepreciationDepletionAndAmortization",
//                                    "unit": "usd",
//                                    "label": "Depreciation and amortization",
//                                    "value": 11104000000
//                               },
//                               {
//                                    "concept": "us-gaap_ShareBasedCompensation",
//                                    "unit": "usd",
//                                    "label": "Share-based compensation expense",
//                                    "value": 9038000000
//                               },
//                               {
//                                    "concept": "us-gaap_DeferredIncomeTaxExpenseBenefit",
//                                    "unit": "usd",
//                                    "label": "Deferred income tax expense/(benefit)",
//                                    "value": 895000000
//                               },
//                               {
//                                    "concept": "us-gaap_OtherNoncashIncomeExpense",
//                                    "unit": "usd",
//                                    "label": "Other",
//                                    "value": -111000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncreaseDecreaseInAccountsReceivable",
//                                    "unit": "usd",
//                                    "label": "Accounts receivable, net",
//                                    "value": 1823000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncreaseDecreaseInInventories",
//                                    "unit": "usd",
//                                    "label": "Inventories",
//                                    "value": -1484000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncreaseDecreaseInOtherReceivables",
//                                    "unit": "usd",
//                                    "label": "Vendor non-trade receivables",
//                                    "value": 7520000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncreaseDecreaseInOtherOperatingAssets",
//                                    "unit": "usd",
//                                    "label": "Other current and non-current assets",
//                                    "value": 6499000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncreaseDecreaseInAccountsPayable",
//                                    "unit": "usd",
//                                    "label": "Accounts payable",
//                                    "value": 9448000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncreaseDecreaseInContractWithCustomerLiability",
//                                    "unit": "usd",
//                                    "label": "Deferred revenue",
//                                    "value": 478000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncreaseDecreaseInOtherOperatingLiabilities",
//                                    "unit": "usd",
//                                    "label": "Other current and non-current liabilities",
//                                    "value": 5632000000
//                               },
//                               {
//                                    "concept": "us-gaap_NetCashProvidedByUsedInOperatingActivities",
//                                    "unit": "usd",
//                                    "label": "Cash generated by operating activities",
//                                    "value": 122151000000
//                               },
//                               {
//                                    "concept": "us-gaap_PaymentsToAcquireAvailableForSaleSecuritiesDebt",
//                                    "unit": "usd",
//                                    "label": "Purchases of marketable securities",
//                                    "value": 76923000000
//                               },
//                               {
//                                    "concept": "us-gaap_ProceedsFromMaturitiesPrepaymentsAndCallsOfAvailableForSaleSecurities",
//                                    "unit": "usd",
//                                    "label": "Proceeds from maturities of marketable securities",
//                                    "value": 29917000000
//                               },
//                               {
//                                    "concept": "us-gaap_ProceedsFromSaleOfAvailableForSaleSecuritiesDebt",
//                                    "unit": "usd",
//                                    "label": "Proceeds from sales of marketable securities",
//                                    "value": 37446000000
//                               },
//                               {
//                                    "concept": "us-gaap_PaymentsToAcquirePropertyPlantAndEquipment",
//                                    "unit": "usd",
//                                    "label": "Payments for acquisition of property, plant and equipment",
//                                    "value": 10708000000
//                               },
//                               {
//                                    "concept": "us-gaap_PaymentsToAcquireBusinessesNetOfCashAcquired",
//                                    "unit": "usd",
//                                    "label": "Payments made in connection with business acquisitions, net",
//                                    "value": 306000000
//                               },
//                               {
//                                    "concept": "us-gaap_PaymentsForProceedsFromOtherInvestingActivities",
//                                    "unit": "usd",
//                                    "label": "Other",
//                                    "value": 1780000000
//                               },
//                               {
//                                    "concept": "us-gaap_NetCashProvidedByUsedInInvestingActivities",
//                                    "unit": "usd",
//                                    "label": "Cash used in investing activities",
//                                    "value": -22354000000
//                               },
//                               {
//                                    "concept": "us-gaap_PaymentsRelatedToTaxWithholdingForShareBasedCompensation",
//                                    "unit": "usd",
//                                    "label": "Payments for taxes related to net share settlement of equity awards",
//                                    "value": 6223000000
//                               },
//                               {
//                                    "concept": "us-gaap_PaymentsOfDividends",
//                                    "unit": "usd",
//                                    "label": "Payments for dividends and dividend equivalents",
//                                    "value": 14841000000
//                               },
//                               {
//                                    "concept": "us-gaap_PaymentsForRepurchaseOfCommonStock",
//                                    "unit": "usd",
//                                    "label": "Repurchases of common stock",
//                                    "value": 89402000000
//                               },
//                               {
//                                    "concept": "us-gaap_ProceedsFromIssuanceOfLongTermDebt",
//                                    "unit": "usd",
//                                    "label": "Proceeds from issuance of term debt, net",
//                                    "value": 5465000000
//                               },
//                               {
//                                    "concept": "us-gaap_RepaymentsOfLongTermDebt",
//                                    "unit": "usd",
//                                    "label": "Repayments of term debt",
//                                    "value": 9543000000
//                               },
//                               {
//                                    "concept": "us-gaap_ProceedsFromRepaymentsOfCommercialPaper",
//                                    "unit": "usd",
//                                    "label": "Proceeds from/(Repayments of) commercial paper, net",
//                                    "value": 3955000000.0
//                               },
//                               {
//                                    "concept": "us-gaap_ProceedsFromPaymentsForOtherFinancingActivities",
//                                    "unit": "usd",
//                                    "label": "Other",
//                                    "value": -160000000
//                               },
//                               {
//                                    "concept": "us-gaap_NetCashProvidedByUsedInFinancingActivities",
//                                    "unit": "usd",
//                                    "label": "Cash used in financing activities",
//                                    "value": -110749000000
//                               },
//                               {
//                                    "concept": "us-gaap_CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalentsPeriodIncreaseDecreaseIncludingExchangeRateEffect",
//                                    "unit": "usd",
//                                    "label": "Decrease in cash, cash equivalents and restricted cash",
//                                    "value": -10952000000
//                               },
//                               {
//                                    "concept": "us-gaap_IncomeTaxesPaidNet",
//                                    "unit": "usd",
//                                    "label": "Cash paid for income taxes, net",
//                                    "value": 19573000000
//                               },
//                               {
//                                    "concept": "us-gaap_InterestPaidNet",
//                                    "unit": "usd",
//                                    "label": "Cash paid for interest",
//                                    "value": 2865000000
//                               }
//                          ]
//           }
//      }
// }

module.exports = mangoose.model("Company", CompanySchema);