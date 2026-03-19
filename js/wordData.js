const WordRoots = [
  {
    id: 1,
    root: "搜索引擎优化 (SEO)",
    origin: "核心概念",
    meaning: "通过优化网站结构和内容来提高在搜索引擎中的排名",
    description: "搜索引擎优化是一种通过改进网站内容、结构和外部链接来提高网站在搜索引擎自然搜索结果中排名的技术。其核心目标是增加网站的可见性和有机流量，而非通过付费广告获得。有效的SEO需要理解搜索引擎的工作原理，包括爬取、索引和排名算法，同时持续关注算法更新和最佳实践。",
    examples: [
      {
        word: "电商网站流量提升",
        meaning: "通过SEO优化产品页面",
        breakdown: { root: "SEO" },
        explanation: "优化产品标题、描述和分类结构，使产品页面更容易被搜索引擎发现和索引，从而获得更多自然搜索流量。"
      },
      {
        word: "本地商家发现",
        meaning: "本地SEO优化",
        breakdown: { root: "SEO" },
        explanation: "通过优化Google My Business、本地关键词和评论，使本地商家在地图搜索和本地搜索结果中获得更好排名。"
      },
      {
        word: "内容营销效果",
        meaning: "内容SEO策略",
        breakdown: { root: "SEO" },
        explanation: "创建高质量、有价值的内容并针对特定关键词进行优化，吸引用户搜索并提高内容在搜索结果中的可见性。"
      }
    ],
    quiz: {
      question: "SEO的主要目标是？",
      options: ["购买付费广告", "提高自然搜索排名", "增加社交媒体粉丝", "制作更多视频"],
      correctAnswer: 1
    }
  },
  {
    id: 2,
    root: "关键词研究",
    origin: "关键词策略",
    meaning: "研究和分析用户搜索的词汇和短语，用于优化网站内容",
    description: "关键词研究是SEO的基础工作，涉及发现和分析目标用户使用的搜索词汇。这个过程包括分析搜索量、竞争程度、搜索意图和商业价值等指标。有效的关键词研究不仅找到高搜索量的关键词，还要找到与用户搜索意图匹配的关键词，以及竞争较小但价值较高的长尾关键词。",
    examples: [
      {
        word: "长尾关键词挖掘",
        meaning: "寻找具体搜索短语",
        breakdown: { root: "关键词研究" },
        explanation: "分析搜索数据，发现具体的、低竞争但高转化的长尾关键词，如'适合初学者的SEO工具推荐'而非泛泛的'SEO工具'。"
      },
      {
        word: "搜索意图分析",
        meaning: "理解用户搜索目的",
        breakdown: { root: "关键词研究" },
        explanation: "分析关键词背后的搜索意图（信息型、交易型、导航型），确保内容匹配用户的真实需求。"
      },
      {
        word: "竞争对手关键词",
        meaning: "分析竞争对手排名",
        breakdown: { root: "关键词研究" },
        explanation: "使用工具分析竞争对手排名的关键词，发现未覆盖的机会和差异化定位空间。"
      }
    ],
    quiz: {
      question: "长尾关键词的特点是？",
      options: ["搜索量最高", "竞争小但转化率高", "无需优化", "只有品牌词"],
      correctAnswer: 1
    }
  },
  {
    id: 3,
    root: "页面标题 (Title Tag)",
    origin: "页面元素",
    meaning: "HTML中定义网页标题的标签，是SEO最重要的页面元素之一",
    description: "标题标签是HTML中<head>部分的<title>元素，出现在浏览器标签页和搜索结果页面中。标题是影响页面排名最重要的页面因素之一，也是用户点击搜索结果的第一影响因素。有效的标题应该包含主要关键词，准确描述页面内容，吸引用户点击，并保持在60个字符以内以确保在搜索结果中完整显示。",
    examples: [
      {
        word: "电商产品标题",
        meaning: "优化产品页面标题",
        breakdown: { root: "标题标签" },
        explanation: "使用'品牌名 + 产品类型 + 关键特性 + 价格/优惠'格式，如'iPhone 15 Pro Max 256GB 限时优惠 - 官方旗舰店'"
      },
      {
        word: "博客文章标题",
        meaning: "吸引点击的文章标题",
        breakdown: { root: "标题标签" },
        explanation: "使用提问式或列表式标题，如'2024年SEO最佳实践：10个提升排名的关键策略'来增加点击率。"
      },
      {
        word: "服务页面标题",
        meaning: "突出价值的服务标题",
        breakdown: { root: "标题标签" },
        explanation: "包含服务类型和核心优势，如'专业网站SEO优化服务 - 30天见效或全额退款'"
      }
    ],
    quiz: {
      question: "标题标签建议的最大字符数是？",
      options: ["30", "60", "120", "200"],
      correctAnswer: 1
    }
  },
  {
    id: 4,
    root: "元描述 (Meta Description)",
    origin: "页面元素",
    meaning: "HTML中描述页面内容的简短摘要，出现在搜索结果中",
    description: "元描述是HTML中<head>部分的<meta>标签，用于描述页面内容。虽然不是直接排名因素，但它影响用户的点击率，间接影响SEO效果。好的元描述应该准确反映页面内容，包含相关关键词，具有说服力吸引用户点击，并保持在150-160个字符以确保在搜索结果中完整显示。",
    examples: [
      {
        word: "产品描述优化",
        meaning: "提升产品点击率",
        breakdown: { root: "元描述" },
        explanation: "撰写包含核心卖点和行动号召的描述，如'最新款智能手机，5G高速网络，超长续航。今天下单享7天无理由退换！'"
      },
      {
        word: "服务页面描述",
        meaning: "突出专业优势",
        breakdown: { root: "元描述" },
        explanation: "强调服务价值和成果，如'10年SEO经验，帮助500+企业实现流量翻倍。立即免费咨询，获取定制优化方案。'"
      },
      {
        word: "文章摘要撰写",
        meaning: "概括文章价值",
        breakdown: { root: "元描述" },
        explanation: "总结文章核心观点和收获，如'本文分享5个提升网站速度的实用技巧，帮助你改善用户体验和SEO排名。立即学习！'"
      }
    ],
    quiz: {
      question: "元描述是否是直接排名因素？",
      options: ["是，非常重要", "否，但影响点击率", "否，完全不重要", "是，最重要"],
      correctAnswer: 1
    }
  },
  {
    id: 5,
    root: "H1标签",
    origin: "页面结构",
    meaning: "HTML中的最高级标题标签，每个页面应只有一个H1",
    description: "H1标签是HTML中最重要的标题标签，用于定义页面的主标题。每个页面应该只使用一个H1标签，这个标题应该与页面主题高度相关，包含主要关键词。H1不仅帮助搜索引擎理解页面内容，也帮助用户快速识别页面的主要内容。H1应该是页面上最显著、最重要的标题文本。",
    examples: [
      {
        word: "博客文章H1",
        meaning: "文章主标题",
        breakdown: { root: "H1标签" },
        explanation: "使用与标题标签一致的文章标题作为H1，确保与页面主题和搜索意图完全匹配。"
      },
      {
        word: "产品页面H1",
        meaning: "产品名称标题",
        breakdown: { root: "H1标签" },
        explanation: "使用产品完整名称作为H1，包含品牌、型号和关键特性，如'Apple MacBook Pro 14英寸 M3芯片'"
      },
      {
        word: "服务页面H1",
        meaning: "服务主题标题",
        breakdown: { root: "H1标签" },
        explanation: "清晰说明服务类型和价值，如'企业网站SEO优化服务'，避免过于营销化的语言。"
      }
    ],
    quiz: {
      question: "每个页面应该有几个H1标签？",
      options: ["可以随意使用", "只有一个", "至少三个", "不需要"],
      correctAnswer: 1
    }
  },
  {
    id: 6,
    root: "内部链接",
    origin: "链接建设",
    meaning: "网站内部页面之间的链接，帮助用户导航和传递页面权重",
    description: "内部链接是指从网站内一个页面指向另一个页面的链接。内部链接对SEO有多重价值：帮助搜索引擎爬虫发现和索引页面、在页面之间传递页面权重（链接价值）、建立网站的层次结构、帮助用户导航和发现相关内容。有效的内部链接策略包括使用描述性锚文本、创建内容集群、确保重要页面获得更多内部链接。",
    examples: [
      {
        word: "内容集群建设",
        meaning: "主题内容相互链接",
        breakdown: { root: "内部链接" },
        explanation: "围绕一个核心主题创建多个相关文章，并在它们之间建立内部链接，形成内容集群，提升主题权威性。"
      },
      {
        word: "面包屑导航",
        meaning: "层次结构链接",
        breakdown: { root: "内部链接" },
        explanation: "在页面顶部显示导航路径（首页>分类>子分类>当前页面），帮助用户理解位置并返回上级页面。"
      },
      {
        word: "相关文章推荐",
        meaning: "内容交叉链接",
        breakdown: { root: "内部链接" },
        explanation: "在文章末尾推荐3-5篇相关文章，使用自然语言锚文本，延长用户停留时间并传递页面权重。"
      }
    ],
    quiz: {
      question: "内部链接的主要价值不包括？",
      options: ["帮助爬虫发现页面", "传递页面权重", "直接购买外链", "帮助用户导航"],
      correctAnswer: 2
    }
  },
  {
    id: 7,
    root: "外部链接 (Backlink)",
    origin: "链接建设",
    meaning: "其他网站指向你网站的链接，是权威性和排名的重要信号",
    description: "外部链接，又称反向链接，是指从其他网站指向你网站的链接。外部链接是搜索引擎评估网站权威性和信任度的核心因素之一。高质量的相关性外部链接可以显著提升排名，而低质量或垃圾外链可能导致惩罚。有效的外链建设策略包括创建值得链接的内容、寻找合作伙伴、参与行业讨论、避免购买外链或使用黑帽技术。",
    examples: [
      {
        word: "客座博客文章",
        meaning: "在权威网站发布内容",
        breakdown: { root: "外部链接" },
        explanation: "在行业权威网站发布高质量客座文章，在内容中自然地链接到你的相关页面，获得高质量外链。"
      },
      {
        word: "资源页面链接",
        meaning: "被收录为有用资源",
        breakdown: { root: "外部链接" },
        explanation: "创建有价值的工具、指南或研究，联系网站管理员请求被添加到相关资源页面，获得自然的外链。"
      },
      {
        word: "新闻稿发布",
        meaning: "获得媒体报道",
        breakdown: { root: "外部链接" },
        explanation: "发布有新闻价值的内容，吸引媒体报道和新闻网站引用，获得权威媒体的外链。"
      }
    ],
    quiz: {
      question: "购买外链对SEO的影响是？",
      options: ["能快速提升排名", "可能导致搜索引擎惩罚", "完全没有影响", "推荐的做法"],
      correctAnswer: 1
    }
  },
  {
    id: 8,
    root: "页面速度",
    origin: "技术SEO",
    meaning: "网站加载速度，直接影响用户体验和搜索引擎排名",
    description: "页面速度是用户体验和SEO的关键因素。搜索引擎将页面速度作为排名因素，因为更快的网站提供更好的用户体验。页面速度受多个因素影响：服务器响应时间、图像优化、代码精简、浏览器缓存、CDN使用等。优化页面速度不仅有助于SEO，还能提高转化率和降低跳出率。核心网页指标（Core Web Vitals）是Google评估页面速度的标准。",
    examples: [
      {
        word: "图片压缩优化",
        meaning: "减少图片文件大小",
        breakdown: { root: "页面速度" },
        explanation: "使用工具如TinyPNG压缩图片，使用现代格式如WebP，在保持质量的同时显著减少文件大小。"
      },
      {
        word: "启用浏览器缓存",
        meaning: "让用户加载更快",
        breakdown: { root: "页面速度" },
        explanation: "配置缓存头，让静态资源（图片、CSS、JS）在用户浏览器中缓存，减少重复加载时间。"
      },
      {
        word: "使用CDN",
        meaning: "全球加速访问",
        breakdown: { root: "页面速度" },
        explanation: "使用内容分发网络（CDN）将内容分发到全球服务器节点，用户从最近的服务器加载，大幅提高速度。"
      }
    ],
    quiz: {
      question: "Google使用的页面速度评估标准是？",
      options: ["网页加载时间", "核心网页指标", "服务器响应时间", "文件大小"],
      correctAnswer: 1
    }
  },
  {
    id: 9,
    root: "移动友好性",
    origin: "技术SEO",
    meaning: "网站在移动设备上的显示和体验，是排名的重要因素",
    description: "移动友好性指网站在移动设备上的显示质量和用户体验。随着移动搜索超过桌面搜索，Google采用移动优先索引策略，优先使用网站的移动版本进行排名和索引。移动友好性包括：响应式设计、触摸友好的界面、可读的文字大小、适当的间距、避免移动常见错误（如不可用Flash、文本太小、横向滚动等）。",
    examples: [
      {
        word: "响应式设计",
        meaning: "适应所有设备",
        breakdown: { root: "移动友好性" },
        explanation: "使用响应式Web设计（RWD），让网站自动适应桌面、平板和手机等各种屏幕尺寸。"
      },
      {
        word: "触摸友好按钮",
        meaning: "易于点击的交互元素",
        breakdown: { root: "移动友好性" },
        explanation: "确保按钮和链接足够大（至少44x44像素），有足够的间距，避免点击困难或误触。"
      },
      {
        word: "避免横向滚动",
        meaning: "正确的移动布局",
        breakdown: { root: "移动友好性" },
        explanation: "使用百分比宽度和弹性布局，确保内容在移动设备上垂直流式展示，避免需要横向滚动。"
      }
    ],
    quiz: {
      question: "Google采用的索引策略是？",
      options: ["桌面优先", "移动优先", "同时索引", "随机选择"],
      correctAnswer: 1
    }
  },
  {
    id: 10,
    root: "HTTPS",
    origin: "技术SEO",
    meaning: "安全超文本传输协议，加密网站与用户之间的通信",
    description: "HTTPS是HTTP的安全版本，通过SSL/TLS加密网站与用户浏览器之间的通信。Google将HTTPS作为排名因素，HTTPS网站在同等条件下排名更高。HTTPS不仅提升SEO，还增强用户信任和安全，保护用户数据不被窃取或篡改。HTTPS已成为现代网站的标准配置，大多数浏览器会标记非HTTPS网站为“不安全”。",
    examples: [
      {
        word: "SSL证书安装",
        meaning: "启用HTTPS加密",
        breakdown: { root: "HTTPS" },
        explanation: "从证书颁发机构获取SSL证书，配置服务器使用HTTPS，确保所有页面通过HTTPS访问。"
      },
      {
        word: "全站HTTPS迁移",
        meaning: "从HTTP升级到HTTPS",
        breakdown: { root: "HTTPS" },
        explanation: "规划HTTPS迁移，配置301重定向从HTTP到HTTPS，更新内部链接和第三方链接，确保无缝切换。"
      },
      {
        word: "混合内容修复",
        meaning: "确保完全加密",
        breakdown: { root: "HTTPS" },
        explanation: "修复混合内容问题（HTTPS页面包含HTTP资源），确保所有脚本、样式和图片都通过HTTPS加载。"
      }
    ],
    quiz: {
      question: "HTTPS对SEO的影响是？",
      options: ["负面影响", "正面排名因素", "完全没有影响", "只在某些重要"],
      correctAnswer: 1
    }
  },
  {
    id: 11,
    root: "结构化数据",
    origin: "技术SEO",
    meaning: "使用标准化格式标记网页内容，帮助搜索引擎理解",
    description: "结构化数据是使用标准化格式（如JSON-LD、Microdata）标记网页内容的技术，帮助搜索引擎更好地理解内容的含义和上下文。结构化数据可以触发富媒体搜索结果（如评分星级、价格、作者信息等），提高点击率。常见的结构化数据类型包括文章、产品、评论、FAQ、面包屑、事件等。",
    examples: [
      {
        word: "产品结构化数据",
        meaning: "显示价格和库存信息",
        breakdown: { root: "结构化数据" },
        explanation: "使用Product标记添加产品名称、价格、库存、评分等信息，在搜索结果中显示丰富的产品信息。"
      },
      {
        word: "FAQ结构化数据",
        meaning: "显示常见问题答案",
        breakdown: { root: "结构化数据" },
        explanation: "使用FAQPage标记问题和答案对，让搜索结果直接显示常见问题答案，提高可见性。"
      },
      {
        word: "文章结构化数据",
        meaning: "增强文章搜索结果",
        breakdown: { root: "结构化数据" },
        explanation: "使用Article标记添加作者、发布时间、封面图等信息，在搜索结果中显示更丰富的文章元数据。"
      }
    ],
    quiz: {
      question: "结构化数据的主要好处是？",
      options: ["直接提高排名", "触发富媒体结果", "减少页面大小", "替代标题标签"],
      correctAnswer: 1
    }
  },
  {
    id: 12,
    root: "网站地图 (Sitemap)",
    origin: "技术SEO",
    meaning: "列出网站所有页面的文件，帮助搜索引擎发现和索引",
    description: "网站地图是XML文件，列出网站的所有重要页面及其最后更新时间和优先级。网站地图帮助搜索引擎爬虫更有效地发现和索引页面，特别是对于大型网站或新页面。网站不会保证页面被索引，但可以提高被发现的概率。网站地图应该通过Google Search Console提交给搜索引擎，并保持最新状态。",
    examples: [
      {
        word: "XML网站地图生成",
        meaning: "自动创建和更新",
        breakdown: { root: "网站地图" },
        explanation: "使用插件或脚本自动生成XML网站地图，包含所有重要页面，定期更新并提交给搜索引擎。"
      },
      {
        word: "分块网站地图",
        meaning: "处理大型网站",
        breakdown: { root: "网站地图" },
        explanation: "对于超过50,000个URL的大型网站，创建多个网站地图文件并使用索引地图管理。"
      },
      {
        word: "网站地图优化",
        meaning: "突出重要页面",
        breakdown: { root: "网站地图" },
        explanation: "使用priority和changefreq属性，帮助搜索引擎理解页面重要性和更新频率，优化爬取顺序。"
      }
    ],
    quiz: {
      question: "单个XML网站地图最多包含多少URL？",
      options: ["100", "1,000", "50,000", "1,000,000"],
      correctAnswer: 2
    }
  },
  {
    id: 13,
    root: "robots.txt",
    origin: "技术SEO",
    meaning: "告诉搜索引擎爬虫哪些页面可以或不能抓取",
    description: "robots.txt是一个位于网站根目录的文本文件，用于指示搜索引擎爬虫哪些页面或目录可以抓取，哪些应该被忽略。robots.txt不能阻止页面被索引（需要使用noindex元标签），但可以防止爬虫浪费资源抓取不重要的页面。合理配置robots.txt可以优化爬虫资源使用，控制重要页面和敏感内容的抓取。",
    examples: [
      {
        word: "阻止管理区域",
        meaning: "保护后台不被抓取",
        breakdown: { root: "robots.txt" },
        explanation: "使用Disallow指令阻止爬虫访问/admin等管理目录，避免后台页面被索引。"
      },
      {
        word: "允许重要资源",
        meaning: "确保CSS和JS被抓取",
        breakdown: { root: "robots.txt" },
        explanation: "明确允许或使用Allow指令确保CSS、JS等样式和脚本文件被爬虫抓取，帮助渲染理解页面。"
      },
      {
        word: "阻止测试页面",
        meaning: "避免测试内容被索引",
        breakdown: { root: "robots.txt" },
        explanation: "使用Disallow阻止/test、/staging等测试环境页面被搜索索引，只允许生产环境页面。"
      }
    ],
    quiz: {
      question: "robots.txt可以防止页面被索引吗？",
      options: ["可以，完全阻止", "不能，只能阻止抓取", "取决于搜索引擎", "对所有搜索引擎都有效"],
      correctAnswer: 1
    }
  },
  {
    id: 14,
    root: "404错误页面",
    origin: "技术SEO",
    meaning: "用户尝试访问不存在的页面时显示的错误页面",
    description: "404错误页面是当用户或爬虫尝试访问不存在的URL时服务器返回的HTTP状态码。过多的404错误会损害用户体验和SEO，因为爬虫会浪费资源抓取无效页面，用户体验也会下降。应该定期监测404错误，修复或设置适当的301重定向。好的404页面应该提供导航选项，帮助用户找到需要的内容，而不是让用户离开网站。",
    examples: [
      {
        word: "404错误监测",
        meaning: "发现并修复错误链接",
        breakdown: { root: "404错误" },
        explanation: "使用Google Search Console和网站分析工具定期监测404错误，识别来源并修复或重定向。"
      },
      {
        word: "301重定向设置",
        meaning: "修复删除的页面",
        breakdown: { root: "404错误" },
        explanation: "对于已删除或移动的页面，设置301重定向到相关的新页面，保持用户体验和链接价值。"
      },
      {
        word: "自定义404页面",
        meaning: "优化用户留存",
        breakdown: { root: "404错误" },
        explanation: "设计友好的404页面，提供搜索框、热门链接和导航菜单，减少用户流失。"
      }
    ],
    quiz: {
      question: "如何处理已删除但仍有外链的页面？",
      options: ["直接删除", "设置为301重定向", "忽略不管", "返回500错误"],
      correctAnswer: 1
    }
  },
  {
    id: 15,
    root: "内容质量",
    origin: "内容SEO",
    meaning: "内容的价值、独特性和用户体验，是排名的核心因素",
    description: "内容质量是SEO成功的基石。搜索引擎的目标是为用户提供最有价值、最相关的结果。高质量内容应该是原创的、有深度的、解决用户问题的、准确和及时的。内容质量体现在多个方面：文字长度（通常长内容排名更好）、原创性（避免复制）、实用性（真正解决问题）、专业性（有权威来源支撑）、更新频率（保持内容新鲜）。",
    examples: [
      {
        word: "深度长文创作",
        meaning: "提供全面的内容",
        breakdown: { root: "内容质量" },
        explanation: "创建2000字以上的深度文章，全面覆盖主题的各个方面，提供比竞争对手更详尽的内容。"
      },
      {
        word: "原创研究数据",
        meaning: "提供独特价值",
        breakdown: { root: "内容质量" },
        explanation: "开展原创研究、调查或数据分析，发布独特的数据和见解，获得权威外链和媒体引用。"
      },
      {
        word: "内容定期更新",
        meaning: "保持内容新鲜度",
        breakdown: { root: "内容质量" },
        explanation: "定期审查和更新旧内容，添加最新信息、统计数据和链接，让搜索引擎知道内容仍然相关。"
      }
    ],
    quiz: {
      question: "高质量内容的特点不包括？",
      options: ["原创性", "解决用户问题", "从其他网站复制", "准确和及时"],
      correctAnswer: 2
    }
  },
  {
    id: 16,
    root: "内容密度",
    origin: "内容SEO",
    meaning: "内容中关键词和相关术语的出现频率和分布",
    description: "内容密度指内容中关键词、相关术语和主题相关词汇的分布和频率。虽然传统的“关键词密度”已不再是主要排名因素，但内容的语义相关性仍然重要。LSI（潜在语义索引）相关术语、同义词和相关主题词汇的自然使用，可以帮助搜索引擎更好地理解内容的主题和深度。应该避免关键词堆砌，专注于自然、全面的内容创作。",
    examples: [
      {
        word: "LSI关键词使用",
        meaning: "自然使用相关术语",
        breakdown: { root: "内容密度" },
        explanation: "在内容中自然地使用与主题相关的术语、同义词和概念，如“搜索引擎优化”相关“SERP”、“关键词”、“排名”等。"
      },
      {
        word: "主题完整性",
        meaning: "全面覆盖主题",
        breakdown: { root: "内容密度" },
        explanation: "从多个角度和子主题讨论主话题，确保内容的主题密度和深度满足用户需求。"
      },
      {
        word: "避免关键词堆砌",
        meaning: "自然的语言表达",
        breakdown: { root: "内容密度" },
        explanation: "不要为了密度而重复关键词，专注于为用户创造价值，让关键词自然地出现在合适的位置。"
      }
    ],
    quiz: {
      question: "LSI是什么的缩写？",
      options: ["链接结构索引", "潜在语义索引", "大型网站索引", "链接搜索引擎接口"],
      correctAnswer: 1
    }
  },
  {
    id: 17,
    root: "图片优化",
    origin: "媒体SEO",
    meaning: "优化图片以提高搜索引擎可见性和页面性能",
    description: "图片优化涉及多个方面：文件大小压缩、文件格式选择、替代文本（alt text）、文件名优化、结构化数据等。优化后的图片可以提高页面速度、在图片搜索中获得流量、提高无障碍访问性。搜索引擎越来越重视图片内容，特别是在移动搜索中，图片经常出现在重要位置。",
    examples: [
      {
        word: "图片alt属性",
        meaning: "描述图片内容",
        breakdown: { root: "图片优化" },
        explanation: "为所有图片添加描述性的alt文本，帮助搜索引擎理解图片内容，提高无障碍访问性和图片搜索排名。"
      },
      {
        word: "图片文件名",
        meaning: "使用描述性名称",
        breakdown: { root: "图片优化" },
        explanation: "使用描述性的、包含关键词的文件名（如“seo-checklist.jpg”）而非默认的“IMG1234.jpg”。"
      },
      {
        word: "图片格式选择",
        meaning: "平衡质量和大小",
        breakdown: { root: "图片优化" },
        explanation: "对照片使用JPEG，对图形和图标使用PNG，优先使用现代WebP格式以获得更好的压缩率和质量。"
      }
    ],
    quiz: {
      question: "图片alt属性的主要作用不包括？",
      options: ["SEO优化", "无障碍访问", "图片搜索", "直接提高排名"],
      correctAnswer: 3
    }
  },
  {
    id: 18,
    root: "本地SEO",
    origin: "细分领域",
    meaning: "针对本地搜索结果优化的策略，吸引本地客户",
    description: "本地SEO是针对本地搜索结果优化的策略，帮助本地企业在地理相关的搜索中被发现。本地SEO的关键要素包括Google My Business配置、本地关键词、NAP一致性（名称、地址、电话号码）、本地评论、本地内容等。本地搜索结果通常出现在地图、本地包和通用搜索结果的顶部位置，对本地企业至关重要。",
    examples: [
      {
        word: "Google My Business",
        meaning: "配置企业档案",
        breakdown: { root: "本地SEO" },
        explanation: "创建并完善Google My Business档案，添加业务信息、图片、营业时间，获取和回复客户评论。"
      },
      {
        word: "NAP一致性",
        meaning: "统一联系方式",
        breakdown: { root: "本地SEO" },
        explanation: "确保企业名称、地址和电话号码在所有在线目录、网站和社交媒体上一致，提高本地搜索信任度。"
      },
      {
        word: "本地关键词优化",
        meaning: "覆盖本地搜索",
        breakdown: { root: "本地SEO" },
        explanation: "在内容和标题中使用地理相关关键词，如“北京SEO服务”、“上海网站优化”，吸引本地客户搜索。"
      }
    ],
    quiz: {
      question: "本地SEO中的NAP是指？",
      options: ["名称、地址、电话", "自然搜索、广告、推广", "新、最新、热门", "名称、年龄、职位"],
      correctAnswer: 0
    }
  },
  {
    id: 19,
    root: "页面体验 (Page Experience)",
    origin: "技术SEO",
    meaning: "Google衡量用户体验的综合指标，包括核心网页指标",
    description: "页面体验是Google在2021年推出的排名因素，综合衡量用户体验质量。核心网页指标是页面体验的核心，包括三个具体指标：LCP（最大内容渲染时间）- 加载性能、FID（首次输入延迟）- 交互性、CLS（累积布局偏移）- 视觉稳定性。其他页面体验因素包括HTTPS、移动友好性、无侵入性弹窗等。良好的页面体验可以提高排名和用户满意度。",
    examples: [
      {
        word: "LCP优化",
        meaning: "改善加载性能",
        breakdown: { root: "页面体验" },
        explanation: "优化图片、启用CDN、压缩代码，确保LCP（最大内容渲染时间）在2.5秒以内。"
      },
      {
        word: "CLS优化",
        meaning: "减少布局偏移",
        breakdown: { root: "页面体验" },
        explanation: "为图片和广告预留空间，避免内容突然移动，确保CLS（累积布局偏移）小于0.1。"
      },
      {
        word: "减少侵入性弹窗",
        meaning: "改善用户体验",
        breakdown: { root: "页面体验" },
        explanation: "避免在页面加载时显示覆盖大部分内容的弹窗，让用户可以立即看到和访问主要内容。"
      }
    ],
    quiz: {
      question: "CLS衡量的是什么？",
      options: ["加载速度", "视觉稳定性", "首次输入延迟", "文件大小"],
      correctAnswer: 1
    }
  },
  {
    id: 20,
    root: "长尾关键词",
    origin: "关键词策略",
    meaning: "搜索量较低但更具体、更易排名的关键词短语",
    description: "长尾关键词是搜索量较低、更具体、通常由3个或更多单词组成的关键词短语。虽然单个长尾关键词搜索量不大，但整体上占据了大部分搜索流量。长尾关键词的优势包括：竞争较小、更容易排名、搜索意图更明确、转化率更高。有效的长尾关键词策略可以快速获得有价值的流量，适合新网站或特定细分市场。",
    examples: [
      {
        word: "具体问题关键词",
        meaning: "回答用户问题",
        breakdown: { root: "长尾关键词" },
        explanation: "针对具体问题创作内容，如“如何在WordPress中设置301重定向”，匹配明确的用户搜索意图。"
      },
      {
        word: "细分市场关键词",
        meaning: "专注细分领域",
        breakdown: { root: "长尾关键词" },
        explanation: "针对细分市场优化，如“跨境电商独立站SEO优化”，而非竞争激烈的“电商SEO”。"
      },
      {
        word: "地域限定关键词",
        meaning: "本地化优化",
        breakdown: { root: "长尾关键词" },
        explanation: "添加地域限定，如“深圳网站建设公司SEO服务”，吸引本地搜索流量。"
      }
    ],
    quiz: {
      question: "长尾关键词的优势不包括？",
      options: ["竞争较小", "搜索量大", "转化率更高", "搜索意图明确"],
      correctAnswer: 1
    }
  },
  {
    id: 21,
    root: "E-E-A-T",
    origin: "内容质量",
    meaning: "评估内容质量的专业标准：经验、专业性、权威性、可信度",
    description: "E-E-A-T是Google用于评估内容质量的专业标准框架，代表经验（Experience）、专业性（Expertise）、权威性（Authoritativeness）和可信度（Trustworthiness）。E-E-A-T特别对YMYL（Your Money or Your Life）主题网站（医疗、金融、安全等）至关重要。提高E-E-A-T的方法包括：作者简介和资质展示、引用权威来源、获得专家外链、建立品牌声誉、保持内容更新等。",
    examples: [
      {
        word: "作者简介展示",
        meaning: "显示作者资质",
        breakdown: { root: "E-E-A-T" },
        explanation: "为内容添加详细的作者简介，展示相关学历、认证、经验和专业背景，建立信任和专业形象。"
      },
      {
        word: "引用权威来源",
        meaning: "增加内容可信度",
        breakdown: { root: "E-E-A-T" },
        explanation: "在文章中引用研究论文、官方文档和权威网站作为数据和信息来源，提高内容的可信度。"
      },
      {
        word: "品牌声誉建设",
        meaning: "建立长期权威",
        breakdown: { root: "E-E-A-T" },
        explanation: "持续提供高质量内容，获得行业认可、媒体报道和权威外链，建立品牌在领域的权威性。"
      }
    ],
    quiz: {
      question: "E-E-A-T中的第二个E代表？",
      options: ["效率", "经验", "简单", "例子"],
      correctAnswer: 1
    }
  },
  {
    id: 22,
    root: "YMYL内容",
    origin: "内容分类",
    meaning: "影响用户金钱、健康或安全的内容，需要更高的质量标准",
    description: "YMYL（Your Money or Your Life）是指可能影响用户金钱、健康、安全或未来幸福的内容类别。Google对YMYL内容采用更严格的审查标准，因为低质量的YMYL内容可能对用户造成实际伤害。YMYL类别包括医疗健康、金融投资、法律建议、安全信息、购物决策等。YMYL网站需要更强的E-E-A-T，更多的专家参与和权威来源支持。",
    examples: [
      {
        word: "医疗健康内容",
        meaning: "严格的准确性要求",
        breakdown: { root: "YMYL" },
        explanation: "医疗内容需要专业医生或医疗专家撰写，引用权威医疗来源，明确标明信息仅供参考。"
      },
      {
        word: "金融投资建议",
        meaning: "风险提示和免责声明",
        breakdown: { root: "YMYL" },
        explanation: "金融内容需要专业资质，包含风险提示和免责声明，引用可靠的数据和市场分析。"
      },
      {
        word: "法律建议内容",
        meaning: "专业律师参与",
        breakdown: { root: "YMYL" },
        explanation: "法律内容需要专业律师撰写或审核，明确说明信息不构成法律建议，建议咨询专业人士。"
      }
    ],
    quiz: {
      question: "以下哪项不是YMYL内容类别？",
      options: ["医疗健康", "金融投资", "美食博客", "安全信息"],
      correctAnswer: 2
    }
  },
  {
    id: 23,
    root: "Google Search Console",
    origin: "工具",
    meaning: "Google提供的免费工具，用于监控和维护网站在搜索中的表现",
    description: "Google Search Console（GSC）是Google提供的免费工具，帮助网站管理员监控和维护网站在Google搜索中的表现。GSC提供丰富的数据，包括搜索查询、展示次数、点击次数、点击率、索引状态、移动可用性、核心网页指标、外链情况等。使用GSC可以及时发现技术问题、了解搜索表现、优化关键词策略、提交网站地图等。",
    examples: [
      {
        word: "搜索查询分析",
        meaning: "了解用户搜索行为",
        breakdown: { root: "GSC" },
        explanation: "通过“效果”报告查看用户通过哪些关键词找到网站、展示次数、点击次数和点击率，优化内容策略。"
      },
      {
        word: "覆盖问题监控",
        meaning: "发现索引问题",
        breakdown: { root: "GSC" },
        explanation: "通过“覆盖”报告查看哪些页面被索引、哪些被排除、是否有错误，及时修复技术问题。"
      },
      {
        word: "核心网页指标检查",
        meaning: "评估页面体验",
        breakdown: { root: "GSC" },
        explanation: "通过“核心网页指标”报告查看页面在LCP、FID、CLS方面的表现，识别需要优化的页面。"
      }
    ],
    quiz: {
      question: "Google Search Console是？",
      options: ["付费工具", "Google免费提供的工具", "第三方SEO工具", "邮件营销工具"],
      correctAnswer: 1
    }
  },
  {
    id: 24,
    root: "Ahrefs",
    origin: "工具",
    meaning: "综合SEO工具集，提供关键词研究、外链分析和竞争对手分析",
    description: "Ahrefs是最流行的综合SEO工具之一，提供全面的关键词研究、外链分析、竞争对手分析、内容研究、排名跟踪等功能。Ahrefs的Site Explorer可以查看任何网站的外链概况和流量估计，Keywords Explorer提供搜索量、难度等数据，Competitors Report帮助发现竞争对手策略。虽然价格较高，但强大的功能使其成为专业SEO必备工具。",
    examples: [
      {
        word: "外链分析",
        meaning: "查看网站外链概况",
        breakdown: { root: "Ahrefs" },
        explanation: "使用Site Explorer查看网站的外链数量、质量、来源，发现新的外链机会和监控外链增长。"
      },
      {
        word: "竞争对手分析",
        meaning: "了解竞争对手策略",
        breakdown: { root: "Ahrefs" },
        explanation: "使用Competitors Report发现竞争对手的顶级页面、排名关键词和外链来源，优化自己的策略。"
      },
      {
        word: "关键词难度分析",
        meaning: "评估排名难度",
        breakdown: { root: "Ahrefs" },
        explanation: "使用Keywords Explorer查看关键词的搜索量、难度（KD）和搜索意图，制定合理的关键词策略。"
      }
    ],
    quiz: {
      question: "Ahrefs的Site Explorer主要用于？",
      options: ["关键词研究", "外链分析", "页面速度测试", "移动友好性检查"],
      correctAnswer: 1
    }
  },
  {
    id: 25,
    root: "页面权重 (Page Authority)",
    origin: "链接指标",
    meaning: "预测特定页面在搜索引擎中排名可能性的指标（Moz工具）",
    description: "页面权重（PA）是Moz开发的指标，用于预测特定页面在搜索引擎中排名的可能性。PA基于对页面外链质量和数量的分析，范围从1-100，分数越高代表排名可能性越大。PA是相对指标，主要用于比较同一网站内不同页面的强度，而不是跨网站比较。PA会随外链变化而变化，需要持续监控。",
    examples: [
      {
        word: "识别最强页面",
        meaning: "发现高PA页面",
        breakdown: { root: "页面权重" },
        explanation: "使用Moz工具查看网站各页面的PA值，识别权重最高的页面，从中获得更多内部链接。"
      },
      {
        word: "追踪PA增长",
        meaning: "监控外链效果",
        breakdown: { root: "页面权重" },
        explanation: "定期检查重要页面的PA值变化，评估外链建设策略的效果和优化方向。"
      },
      {
        word: "外链机会评估",
        meaning: "选择高价值目标",
        breakdown: { root: "页面权重" },
        explanation: "在选择外链目标时，考虑目标页面的PA，优先从高PA页面获得外链。"
      }
    ],
    quiz: {
      question: "页面权重（PA）是哪家公司开发的指标？",
      options: ["Ahrefs", "Moz", "SEMrush", "Google"],
      correctAnswer: 1
    }
  },
  {
    id: 26,
    root: "域名权重 (Domain Authority)",
    origin: "链接指标",
    meaning: "预测整个域名在搜索引擎中排名可能性的指标",
    description: "域名权重（DA）是预测整个域名在搜索引擎中排名可能性的指标。DA基于对域名整体外链概况的分析，包括外链数量、质量和多样性等因素。DA范围从1-100，分数越高代表整体排名能力越强。DA是相对指标，主要用于比较不同域名的相对强度。DA提高需要长期的外链建设和品牌建设，无法快速提升。",
    examples: [
      {
        word: "竞争对手对比",
        meaning: "比较域名强度",
        breakdown: { root: "域名权重" },
        explanation: "使用DA对比自己与竞争对手的域名强度，了解在整体竞争环境中的位置。"
      },
      {
        word: "外链策略规划",
        meaning: "设定现实目标",
        breakdown: { root: "域名权重" },
        explanation: "基于当前DA水平和竞争对手情况，制定合理的外链建设目标和策略。"
      },
      {
        word: "品牌建设追踪",
        meaning: "长期趋势监控",
        breakdown: { root: "域名权重" },
        explanation: "定期监控DA的变化，评估品牌建设和整体外链策略的长期效果。"
      }
    ],
    quiz: {
      question: "DA分数的范围是？",
      options: ["0-10", "1-100", "0-1000", "1-5"],
      correctAnswer: 1
    }
  },
  {
    id: 27,
    root: "跳出率",
    origin: "分析指标",
    meaning: "只访问一个页面就离开的访问者比例",
    description: "跳出率是只访问一个页面就离开网站的访问者百分比。高跳出率可能表示页面没有满足用户需求、加载缓慢、用户体验差或内容质量低。然而，跳出率需要结合上下文理解：某些页面类型（如联系页面、FAQ页面）天然跳出率较高。应该重点关注高流量页面的跳出率，优化内容、相关链接和用户体验。",
    examples: [
      {
        word: "高跳出率页面优化",
        meaning: "改善内容相关性",
        breakdown: { root: "跳出率" },
        explanation: "分析高跳出率页面，检查内容是否与搜索意图匹配，是否提供相关链接，是否引导用户继续浏览。"
      },
      {
        word: "相关性链接添加",
        meaning: "增加内部导航",
        breakdown: { root: "跳出率" },
        explanation: "在页面内容中添加相关的内部链接，引导用户访问更多页面，降低跳出率。"
      },
      {
        word: "页面速度优化",
        meaning: "减少技术原因跳出",
        breakdown: { root: "跳出率" },
        explanation: "优化页面加载速度，确保页面快速响应，避免用户因等待而离开。"
      }
    ],
    quiz: {
      question: "如何理解高跳出率？",
      options: ["总是负面的", "需要结合页面类型理解", "与排名无关", "越低越好"],
      correctAnswer: 1
    }
  },
  {
    id: 28,
    root: "点击率 (CTR)",
    origin: "分析指标",
    meaning: "搜索结果中点击次数与展示次数的比率",
    description: "点击率（CTR）是搜索结果中点击次数与展示次数的比率，计算方式为（点击次数÷展示次数）×100%。CTR是衡量搜索结果吸引力的重要指标，间接影响SEO排名。提高CTR的方法包括：优化标题和描述、使用结构化数据触发富媒体结果、获取星级评分、显示价格等。高CTR告诉搜索引擎你的内容对搜索用户有吸引力。",
    examples: [
      {
        word: "标题优化提升CTR",
        meaning: "测试不同标题",
        breakdown: { root: "点击率" },
        explanation: "A/B测试不同标题文案，使用数字、疑问词和情感词，吸引更多用户点击搜索结果。"
      },
      {
        word: "描述优化",
        meaning: "提高吸引力",
        breakdown: { root: "点击率" },
        explanation: "撰写包含行动号召和独特卖点的元描述，在搜索结果中脱颖而出，提高点击率。"
      },
      {
        word: "结构化数据应用",
        meaning: "展示丰富信息",
        breakdown: { root: "点击率" },
        explanation: "添加产品、评分、FAQ等结构化数据，让搜索结果显示更多信息，吸引用户点击。"
      }
    ],
    quiz: {
      question: "点击率是如何计算的？",
      options: ["点击次数÷访问量", "点击次数÷展示次数", "展示次数÷点击次数", "访问量÷点击次数"],
      correctAnswer: 1
    }
  },
  {
    id: 29,
    root: "锚文本",
    origin: "链接建设",
    meaning: "链接中可点击的文本，帮助搜索引擎理解链接目标页面",
    description: "锚文本是链接中用户看到并可点击的文本，对SEO很重要，因为它帮助搜索引擎理解链接目标页面的内容。锚文本应该描述性、相关且自然。过度使用完全匹配的关键词作为锚文本可能被视为操纵行为，可能导致惩罚。应该多样化锚文本，包括品牌词、通用词（“点击这里”）、URL和长尾短语等。",
    examples: [
      {
        word: "描述性锚文本",
        meaning: "描述链接目标",
        breakdown: { root: "锚文本" },
        explanation: "使用描述目标内容的锚文本，如“SEO优化技巧”而非“点击这里”，帮助搜索引擎理解链接。"
      },
      {
        word: "锚文本多样化",
        meaning: "避免关键词过度使用",
        breakdown: { root: "锚文本" },
        explanation: "在获得外链时，使用品牌名、通用词、长尾短语等多样化的锚文本，避免过度使用关键词。"
      },
      {
        word: "内部链接优化",
        meaning: "改善内部锚文本",
        breakdown: { root: "锚文本" },
        explanation: "优化网站内部链接的锚文本，确保它们描述性且相关，帮助搜索引擎理解网站结构。"
      }
    ],
    quiz: {
      question: "外部链接中过度使用关键词锚文本可能导致？",
      options: ["排名提升", "搜索引擎惩罚", "没有影响", "更多流量"],
      correctAnswer: 1
    }
  },
  {
    id: 30,
    root: "301重定向",
    origin: "技术SEO",
    meaning: "永久重定向，将流量和SEO价值从一个URL转移到另一个URL",
    description: "301重定向是HTTP状态码，表示页面永久移动到新位置。301重定向将用户和搜索引擎从旧URL转移到新URL，并将旧URL的SEO价值（外链、排名）传递给新URL。常见的301重定向使用场景包括：更改URL结构、域名迁移、合并页面、修复错误URL。正确使用301重定向对维护SEO价值至关重要。",
    examples: [
      {
        word: "页面重命名",
        meaning: "保持SEO价值",
        breakdown: { root: "301重定向" },
        explanation: "更改页面URL时设置301重定向，确保旧URL的排名和外链价值传递到新URL。"
      },
      {
        word: "域名迁移",
        meaning: "网站整体迁移",
        breakdown: { root: "301重定向" },
        explanation: "迁移到新域名时，设置所有旧页面的301重定向到对应新页面，保持SEO价值。"
      },
      {
        word: "URL结构优化",
        meaning: "改进网站结构",
        breakdown: { root: "301重定向" },
        explanation: "重新组织网站URL结构时，为所有旧URL设置301重定向，避免404错误和链接价值损失。"
      }
    ],
    quiz: {
      question: "301重定向的主要功能是？",
      options: ["临时重定向", "永久重定向并传递SEO价值", "显示错误页面", "提高页面速度"],
      correctAnswer: 1
    }
  }
];
