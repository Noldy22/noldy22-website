/**
 * Central Products Data File
 * Verified real-world products, prices, indicators, and direct checkout links.
 */

export const products = [
  {
    id: "dual-limit",
    title: "DualLimit EA",
    subtitle: "Automated dual-direction trading with smart risk management for conservative growth.",
    badge: "Limit Orders",
    directPrice: "$30 Direct Crypto",
    mql5Price: "$40 on MQL5",
    image: "../images/DualLimit-EA.png",
    mql5Url: "https://www.mql5.com/en/market/product/138301?source=Site+Main#description",
    whatsappDirectUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%20want%20to%20buy%20the%20DualLimit%20EA%20direct%20via%20Crypto%20(%2430).",
    whatsappCustomUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%27d%20like%20to%20request%20custom%20modifications%20for%20the%20DualLimit%20EA.",
    strategySummary: "DualLimit EA is a disciplined risk-management Expert Advisor designed for EURUSD and XAUUSD (Gold). It places simultaneous buy limit and sell limit orders around prevailing market prices at scheduled times. The engine dynamically calculates optimal lot sizes from real-time account equity while strictly adhering to a 1%–50% risk ceiling, preventing over-leveraging and emotional drawdown.",
    bullets: [
      "Simultaneous dual-direction buy/sell limit order placement",
      "Dynamic percentage-based lot sizing (1%–50% risk cap)",
      "Adjustable order distance, stop loss, and take profit targets",
      "Built-in 24-hour time filter with scheduled order placement",
      "Engineered specifically for EURUSD and XAUUSD volatility patterns"
    ],
    features: [
      {
        title: "Dual Order Strategy",
        description: "Simultaneously places buy limit and sell limit orders at user-defined intervals to capture cyclical price reversals.",
        icon: "fas fa-balance-scale"
      },
      {
        title: "Smart Risk Management",
        description: "Automated lot sizing with a strict 1–50% risk cap to eliminate over-leverage and preserve capital.",
        icon: "fas fa-shield-alt"
      },
      {
        title: "Customizable Settings",
        description: "Easily adjust order spacing, stop loss, profit target, and daily placement execution hours.",
        icon: "fas fa-sliders-h"
      },
      {
        title: "Pair Specialization",
        description: "Optimized specifically around EURUSD and XAUUSD liquidity dynamics and average daily ranges.",
        icon: "fas fa-chart-line"
      }
    ],
    parametersTable: [
      {
        name: "Order Placement Hour",
        defaultValue: "1",
        description: "Server time hour to place pending orders (24h format)"
      },
      {
        name: "Order Placement Minute",
        defaultValue: "0",
        description: "Minute mark for order placement"
      },
      {
        name: "Risk Percentage",
        defaultValue: "2.0%",
        description: "Percentage of account balance risked per trade (capped at 50%)"
      },
      {
        name: "Order Distance",
        defaultValue: "600 points",
        description: "Distance in points from current market price to place orders"
      },
      {
        name: "Stop Loss",
        defaultValue: "100 points",
        description: "Protective stop-loss distance in points"
      },
      {
        name: "Take Profit",
        defaultValue: "550 points",
        description: "Target take profit distance in points"
      }
    ],
    notice: "While DualLimit EA includes automated risk controls, forex and metals trading carry inherent risk. Test on demo accounts prior to live capital deployment.",
    installSteps: [
      "Purchase direct via Crypto (instant delivery) or via official MQL5 Market",
      "Copy the .ex5 file into your MT5 Experts folder (File > Open Data Folder > MQL5 > Experts)",
      "Restart MetaTrader 5 and attach DualLimit EA to your EURUSD or Gold chart",
      "Configure your desired Risk % and Order Distance in the input dialog",
      "Enable 'Allow Algo Trading' on your MT5 toolbar"
    ],
    faq: [
      {
        question: "Does it require specific account types?",
        answer: "Works with any MT5 account type, including hedging and netting accounts with standard retail and prop firm brokers."
      },
      {
        question: "Can I use different currency pairs?",
        answer: "It is pre-optimized for EURUSD and XAUUSD, but settings can be manually calibrated for other liquid pairs."
      },
      {
        question: "What minimum balance is recommended?",
        answer: "Recommended starting balance is $50–$100 on standard accounts, or $20 on cent/micro accounts."
      }
    ]
  },
  {
    id: "dual-flex",
    title: "DualFlex EA",
    subtitle: "Adaptive order-type EA combining limit and stop strategies for dynamic market conditions.",
    badge: "Breakout Engine",
    directPrice: "$40 Direct Crypto",
    mql5Price: "$50 on MQL5",
    image: "../images/DualFlex EA.png",
    mql5Url: "https://www.mql5.com/en/market/product/138449?source=Site+Search",
    whatsappDirectUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%20want%20to%20buy%20the%20DualFlex%20EA%20direct%20via%20Crypto%20(%2440).",
    whatsappCustomUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%27d%20like%20to%20request%20custom%20modifications%20for%20the%20DualFlex%20EA.",
    strategySummary: "DualFlex EA is a hybrid execution system combining conservative mean-reversion limit orders with breakout stop orders. Built with market volatility awareness, DualFlex allows traders to seamlessly pivot between ranging channel capture and directional volatility breakouts while maintaining automated balance risk protections.",
    bullets: [
      "Dynamic order mode selection: PENDING_LIMIT vs PENDING_STOP",
      "Adaptive volatility-based threshold positioning",
      "Automated balance risk calculation with 1%–50% safety cap",
      "Session-based execution timing and order expiry management",
      "Engineered and backtested on EURUSD and Gold (XAUUSD)"
    ],
    features: [
      {
        title: "Order Type Flexibility",
        description: "Switch between limit orders (conservative range strategies) and stop orders (momentum breakout strategies).",
        icon: "fas fa-retweet"
      },
      {
        title: "Adaptive Market Logic",
        description: "Tailored to react to volatility shifts, expanding order distances during high-volatility sessions.",
        icon: "fas fa-robot"
      },
      {
        title: "Enhanced Controls",
        description: "Fine-tune order spacing, stop loss, take profit, server execution time, and risk exposure.",
        icon: "fas fa-sliders-h"
      },
      {
        title: "Risk Management",
        description: "Enforces 1–50% risk limits with real-time balance calculations to prevent account over-exposure.",
        icon: "fas fa-shield-alt"
      }
    ],
    parametersTable: [
      {
        name: "Order Hour",
        defaultValue: "1",
        description: "Server time hour to place orders (24h format)"
      },
      {
        name: "Order Minute",
        defaultValue: "0",
        description: "Minute mark for order placement"
      },
      {
        name: "Order Type",
        defaultValue: "PENDING_LIMIT",
        description: "Order execution style: PENDING_LIMIT or PENDING_STOP"
      },
      {
        name: "Risk Percentage",
        defaultValue: "2.0%",
        description: "Account balance risk percentage per trade (Max 50%)"
      },
      {
        name: "Order Distance",
        defaultValue: "600 points",
        description: "Distance in points from current market price"
      },
      {
        name: "Stop Loss",
        defaultValue: "100 points",
        description: "Protective stop loss distance in points"
      },
      {
        name: "Take Profit",
        defaultValue: "550 points",
        description: "Target take profit distance in points"
      }
    ],
    notice: "While DualFlex EA incorporates advanced money management, trading leveraged instruments involves capital risk. Test thoroughly in demo mode before going live.",
    installSteps: [
      "Purchase via Direct Crypto (instant delivery) or via MQL5 Market",
      "Copy the .ex5 file to your MT5 Experts folder (MQL5 > Experts)",
      "Restart MT5 and attach DualFlex to your EURUSD or XAUUSD chart",
      "Select Order Type (Limit or Stop) and set your custom risk parameters",
      "Enable 'Allow Algo Trading' in MT5"
    ],
    faq: [
      {
        question: "Can I manually override the order type?",
        answer: "Yes, you can toggle between Limit and Stop modes in the input parameters (PENDING_LIMIT vs PENDING_STOP)."
      },
      {
        question: "How does the volatility logic work?",
        answer: "Allows you to capture range boundaries with limit orders, or price expansion during news breaks using stop orders."
      },
      {
        question: "Does it support prop firm accounts?",
        answer: "Yes, predefined stop losses and strict percentage-based position sizing ensure compliance with prop firm rules."
      }
    ]
  },
  {
    id: "london-breakout",
    title: "N22 London Breakout EA",
    subtitle: "Automated London open breakout strategy capturing early European session momentum with dynamic volatility expansion filters.",
    badge: "Session Volatility Engine",
    directPrice: "$80 Direct Crypto",
    mql5Price: "$100 on MQL5",
    image: "../images/n22-london-breakout.png",
    mql5Url: "https://www.mql5.com/en/users/noldy22/seller",
    whatsappDirectUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%20want%20to%20buy%20the%20N22%20London%20Breakout%20EA%20direct%20via%20Crypto%20(%2480).",
    whatsappCustomUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%27d%20like%20to%20request%20custom%20modifications%20for%20the%20N22%20London%20Breakout%20EA.",
    strategySummary: "N22 London Breakout EA is an institutional-grade session momentum algorithm engineered to exploit the explosive liquidity surges at the London session open (08:00 AM London / 03:00 AM EST). The system captures the initial expansion leg out of Asian range consolidation using adaptive volatility buffers, ATR expansion filters, and automated drawdown circuit breakers.",
    bullets: [
      "Automated Asian session range identification and boundary mapping",
      "Volatility expansion filter to avoid false pre-session whipsaws",
      "Dynamic position sizing with strict prop-firm drawdown protection",
      "Session-based trade lifetime with automatic end-of-day order expiration",
      "Optimized for GBPUSD, EURUSD, and GBPJPY volatility cycles"
    ],
    features: [
      {
        title: "Session Range Engine",
        description: "Automatically plots and brackets the high/low of the Asian session consolidation before London liquidity floods the market.",
        icon: "fas fa-clock"
      },
      {
        title: "Breakout Momentum Filter",
        description: "Incorporates ATR-based expansion thresholds to ensure entries occur only on real institutional volume.",
        icon: "fas fa-bolt"
      },
      {
        title: "Drawdown Protection",
        description: "Built-in daily loss limits and trailing stop engines protect accumulated session profits.",
        icon: "fas fa-shield-alt"
      },
      {
        title: "Multi-Pair Compatibility",
        description: "Tuned for GBP pairs and major European crosses with high average daily breakout ranges.",
        icon: "fas fa-chart-line"
      }
    ],
    parametersTable: [
      {
        name: "Session Start Hour",
        defaultValue: "8",
        description: "London session opening hour (server time)"
      },
      {
        name: "Range Lookback (Bars)",
        defaultValue: "24",
        description: "Number of M15 candles used to establish the pre-session range"
      },
      {
        name: "Breakout Buffer",
        defaultValue: "50 points",
        description: "Distance beyond range high/low required to trigger entry"
      },
      {
        name: "Risk Percentage",
        defaultValue: "1.5%",
        description: "Account balance risked per session breakout"
      },
      {
        name: "Stop Loss",
        defaultValue: "250 points",
        description: "Protective SL placed at opposite range boundary or ATR multiple"
      },
      {
        name: "Take Profit",
        defaultValue: "600 points",
        description: "Initial take profit target or trailing anchor"
      },
      {
        name: "Trailing Activation",
        defaultValue: "300 points",
        description: "Profit threshold to trigger the adaptive trailing stop"
      }
    ],
    notice: "Session breakout strategies rely on liquid market hours. Use an ECN broker with tight spreads during the London open for optimal fill rates.",
    installSteps: [
      "Purchase direct via Crypto ($80) or on the official MQL5 Market ($100)",
      "Place N22_London_Breakout.ex5 into your MT5 Experts folder (MQL5 > Experts)",
      "Attach to GBPUSD or EURUSD on the M15 timeframe",
      "Configure session timing to match your broker's server time offset",
      "Enable 'Allow Algo Trading' on MT5"
    ],
    faq: [
      {
        question: "Which timeframe should I attach the EA to?",
        answer: "The recommended timeframe is M15, but it can calculate Asian range boundaries regardless of chart timeframe."
      },
      {
        question: "Does it hold trades overnight?",
        answer: "No, the EA is designed strictly for session day trading and closes or cancels unfilled orders before the New York close."
      },
      {
        question: "Can I use it on prop firm challenge accounts?",
        answer: "Yes, its strict single-entry daily limit and hard SL make it ideal for passing FTMO and prop firm challenges."
      }
    ]
  },
  {
    id: "swing-high-low",
    title: "Noldy22 Swing High & Low",
    subtitle: "Institutional market structure & liquidity indicator detecting valid swing points, order flow shifts, and key price levels.",
    badge: "Technical Indicator",
    directPrice: "FREE Download",
    mql5Price: "FREE on MQL5",
    image: "../images/swing-high-low.png",
    mql5Url: "https://www.mql5.com/en/users/noldy22/seller",
    whatsappDirectUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%27d%20like%20to%20download%20the%20free%20Noldy22%20Swing%20High%20%26%20Low%20indicator.",
    whatsappCustomUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%27d%20like%20to%20discuss%20custom%20indicator%20development.",
    strategySummary: "Noldy22 Swing High & Low is a professional technical indicator built for MetaTrader 5 to identify valid structural swing highs, swing lows, and institutional liquidity pools. Based on Smart Money Concepts (SMC), it filters out minor noisy market wicks and highlights genuine market structure breaks (BOS) and changes of character (ChoCH) in real time without repainting.",
    bullets: [
      "Real-time swing high & swing low structural point detection",
      "Smart Money Concepts (SMC) structure filtering without repainting",
      "Visual liquidity level alerts and price boundary mapping",
      "Fully customizable lookback periods and sensitivity controls",
      "100% Free download for MetaTrader 5 traders"
    ],
    features: [
      {
        title: "Non-Repainting Signals",
        description: "All swing confirmations occur on candle closes, ensuring historical accuracy and reliable backtesting.",
        icon: "fas fa-check-double"
      },
      {
        title: "SMC Structure Filter",
        description: "Filters out sub-structural market noise to pinpoint institutional liquidity pools and order blocks.",
        icon: "fas fa-layer-group"
      },
      {
        title: "Visual Chart Markers",
        description: "Clean on-chart markers and customizable color palettes compatible with dark or light chart templates.",
        icon: "fas fa-eye"
      },
      {
        title: "Multi-Timeframe Analysis",
        description: "Works on any timeframe from 1-minute scalping to weekly macro analysis.",
        icon: "fas fa-chart-bar"
      }
    ],
    parametersTable: [
      {
        name: "Swing Lookback Left",
        defaultValue: "3",
        description: "Number of preceding bars required to confirm a swing point"
      },
      {
        name: "Swing Lookback Right",
        defaultValue: "3",
        description: "Number of subsequent bars required to confirm a swing point"
      },
      {
        name: "Show Break of Structure (BOS)",
        defaultValue: "true",
        description: "Enable on-chart labels for structure continuation breaks"
      },
      {
        name: "Show Change of Character (ChoCH)",
        defaultValue: "true",
        description: "Enable on-chart labels for structure reversal points"
      },
      {
        name: "Alert Notifications",
        defaultValue: "true",
        description: "Send pop-up, push, or audio alert on new swing confirmation"
      },
      {
        name: "Swing High Color",
        defaultValue: "clrDeepSkyBlue",
        description: "Display color for validated swing high markers"
      },
      {
        name: "Swing Low Color",
        defaultValue: "clrCoral",
        description: "Display color for validated swing low markers"
      }
    ],
    notice: "This indicator provides structural technical analysis and does not generate automated orders. Use it alongside a defined risk management strategy.",
    installSteps: [
      "Download the indicator for free via Direct WhatsApp link or on MQL5 Market",
      "Copy Noldy22_Swing_High_Low.ex5 to MT5 Indicators folder (MQL5 > Indicators)",
      "Refresh your MT5 Navigator panel and drag the indicator onto your chart",
      "Adjust sensitivity and color preferences in the input tabs",
      "Click OK to begin mapping structural highs and lows"
    ],
    faq: [
      {
        question: "Does this indicator repaint past points?",
        answer: "No, confirmed swing points are calculated on bar closes and do not shift or disappear in future candles."
      },
      {
        question: "Can I use it in automated EAs?",
        answer: "Yes, it exposes standard iCustom buffer outputs that any MQL5 Expert Advisor can read directly."
      },
      {
        question: "Is this indicator really 100% free?",
        answer: "Yes, it is freely provided by Noldy22 to assist traders in identifying institutional liquidity and market structure."
      }
    ]
  },
  {
    id: "n22-gold-momentum-scalper",
    title: "N22 Gold Momentum Trend Scalper MT5",
    category: "Expert Advisor",
    platform: "MT5",
    pair: "XAUUSD",
    timeframe: "M15",
    priceDirect: 89,
    priceMql5: 99.90,
    badge: "Verified Backtest",
    image: "assets/images/products/gold-momentum-scalper.svg", // Use vector SVG to prevent blur
    youtubeId: "XMvzQ1ig-Cw",
    mql5Url: "https://www.mql5.com/en/market/product/194551",
    stats: {
      profit: "+40.5%",
      period: "6 Months",
      drawdown: "11.29%",
      winRate: "64.35%"
    },
    description: "Disciplined M15 momentum and breakout engine for XAUUSD. Features H1 macro trend confirmation, tick volume filtering, ATR stops, and zero grid/martingale risk.",
    directPrice: "$89 Direct Crypto",
    mql5Price: "$99.90 on MQL5",
    whatsappDirectUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%20want%20to%20buy%20the%20N22%20Gold%20Momentum%20Trend%20Scalper%20MT5%20direct%20via%20Crypto%20(%2489).",
    whatsappCustomUrl: "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%27d%20like%20to%20request%20custom%20modifications%20for%20the%20N22%20Gold%20Momentum%20Trend%20Scalper%20MT5.",
    subtitle: "Disciplined M15 momentum & breakout engine for XAUUSD with H1 macro confirmation and zero grid/martingale risk.",
    strategySummary: "N22 Gold Momentum Trend Scalper MT5 is an institutional-grade algorithmic execution system designed specifically for XAUUSD (Gold) on the M15 timeframe. It combines H1 macro-trend directional filtering with real-time tick volume surges and ATR volatility expansion to scalp high-probability momentum bursts while maintaining strict risk-per-trade controls and zero grid or martingale exposure.",
    bullets: [
      "Disciplined M15 momentum & breakout engine for XAUUSD (Gold)",
      "H1 macro trend confirmation with tick volume spike filtering",
      "Dynamic ATR-based stop loss and multi-target profit protection",
      "Zero grid, zero martingale, strict single-position risk management",
      "Verified backtest: +40.5% profit, 11.29% drawdown, 64.35% win rate"
    ],
    features: [
      {
        title: "Macro Trend Confirmation",
        description: "Aligns M15 intraday entries with H1 higher-timeframe trend structure to prevent counter-trend fakeouts.",
        icon: "fas fa-compass"
      },
      {
        title: "Tick Volume Surge Filter",
        description: "Enters trades only when real institutional liquidity and volume expansion confirm momentum.",
        icon: "fas fa-chart-line"
      },
      {
        title: "ATR Dynamic Risk Management",
        description: "Dynamic ATR-calculated stop loss and multi-target profit protection for optimal risk-to-reward ratios.",
        icon: "fas fa-shield-alt"
      },
      {
        title: "Zero Dangerous Math",
        description: "Strict stop loss on every position with fixed risk sizing. No martingale, grid accumulation, or hedging traps.",
        icon: "fas fa-check-circle"
      }
    ],
    parametersTable: [
      {
        name: "Timeframe",
        defaultValue: "M15",
        description: "Trading execution chart timeframe (optimized for XAUUSD M15)"
      },
      {
        name: "Macro Trend Filter",
        defaultValue: "H1",
        description: "Higher timeframe EMA / structure direction filter"
      },
      {
        name: "Risk Percentage",
        defaultValue: "1.5%",
        description: "Dynamic risk per trade based on account balance/equity"
      },
      {
        name: "ATR Multiplier SL",
        defaultValue: "1.8",
        description: "Average True Range multiplier for dynamic volatility stop-loss"
      },
      {
        name: "ATR Multiplier TP",
        defaultValue: "3.2",
        description: "Take profit target based on ATR expansion"
      },
      {
        name: "Volume Filter Threshold",
        defaultValue: "1.5x",
        description: "Minimum tick volume multiple over 20-bar average required for entry"
      },
      {
        name: "Max Spread Allowed",
        defaultValue: "35 points",
        description: "Maximum allowable broker spread to avoid high slippage entry"
      }
    ],
    notice: "XAUUSD (Gold) volatility can fluctuate dramatically during high-impact US economic releases. Always test on demo before deploying on live capital.",
    installSteps: [
      "Purchase direct via Crypto ($89 instant delivery) or via official MQL5 Market ($99.90)",
      "Copy n22-gold-momentum-scalper.ex5 into your MT5 Experts folder (File > Open Data Folder > MQL5 > Experts)",
      "Restart MetaTrader 5 and attach the EA to an M15 XAUUSD chart",
      "Adjust your risk percentage in the input parameters (recommended 1.0%–2.0%)",
      "Ensure 'Allow Algo Trading' is toggled ON in your MT5 toolbar"
    ],
    faq: [
      {
        question: "What timeframe and pair is this EA optimized for?",
        answer: "It is specifically engineered for XAUUSD (Gold) on the M15 timeframe, utilizing H1 for macro trend alignment."
      },
      {
        question: "Does this EA use grid or martingale?",
        answer: "No. It uses zero grid and zero martingale. Every trade has a predefined hard stop loss and take profit."
      },
      {
        question: "Can I use it on prop firm accounts?",
        answer: "Yes, the strict drawdown control (11.29% max historical DD) and fixed risk per trade make it ideal for prop firm challenges."
      },
      {
        question: "What is the minimum recommended balance?",
        answer: "A minimum balance of $100–$200 on a standard or raw spread account is recommended."
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.productsData = products;
}

