"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2427],{5391:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(4848),o=n(8453);const a={},l="Thrift Server",s={id:"bestpractices/Applications/Spark/thrift",title:"Thrift Server",description:"Long running thrift server",source:"@site/docs/bestpractices/Applications/Spark/thrift.md",sourceDirName:"bestpractices/Applications/Spark",slug:"/bestpractices/Applications/Spark/thrift",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Spark/thrift",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bestpractices/Applications/Spark/thrift.md",tags:[],version:"current",frontMatter:{},sidebar:"bestpractices",previous:{title:"Performance",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Spark/performance"},next:{title:"Troubleshooting",permalink:"/aws-emr-best-practices/docs/bestpractices/Applications/Spark/troubleshooting"}},i={},p=[{value:"Long running thrift server",id:"long-running-thrift-server",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"thrift-server",children:"Thrift Server"})}),"\n",(0,t.jsx)(r.h2,{id:"long-running-thrift-server",children:"Long running thrift server"}),"\n",(0,t.jsx)(r.p,{children:"Spark Thrift Server allows JDBC/ODBC clients to execute SQL queries on Spark. It is recommended to follow the best practices outlined below."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"../../Features/Spot%20Usage/best_practices#ensure-application-masters-only-run-on-an-on-demand-node",children:"Ensure Application Masters only run on an On Demand Node"})}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["As the query results are collected by thrift server,  ensure Spark driver core/memory and ",(0,t.jsx)(r.code,{children:"spark.driver.maxResultSize"})," are properly configured. Use ",(0,t.jsx)(r.code,{children:"--driver-memory"})," insted of ",(0,t.jsx)(r.code,{children:"--conf spark.driver.memory"})," as thrift server is running at client mode"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["Long running thrift server can generate large amount of Spark event logs. ",(0,t.jsx)(r.a,{href:"https://docs.aws.amazon.com/emr/latest/ManagementGuide/app-history-spark-UI.html#app-history-spark-UI-large-event-logs",children:"Activate the Spark event log rolling and compaction feature"})]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Thrift server log file size can be huge as by default the log are accumulated.   Try to configure custom log4j2 properties file to use rolling file appender"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'/usr/lib/spark/sbin/start-thriftserver.sh                         \\\n  -Dlog4j.configurationFile=/home/hadoop/thriftlog4j2.properties" \\\n  --driver-cores 8                                                \\\n  --driver-memory 10G\n'})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"thriftlog4j2.properties"})," example as below:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"property.basePath = /var/log/spark/\n  \nrootLogger.level = info\nrootLogger.appenderRef.rolling.ref = fileLogger\n  \nappender.rolling.type = RollingFile\nappender.rolling.name = fileLogger\nappender.rolling.fileName = ${basePath}spark-root-org.apache.spark.sql.hive.thriftserver.HiveThriftServer2-application.log\nappender.rolling.filePattern = ${basePath}spark-root-org.apache.spark.sql.hive.thriftserver.HiveThriftServer2-application.%d{MM-dd-yy}-%i.log\nappender.rolling.layout.type = PatternLayout\nappender.rolling.layout.pattern = %d{yy/MM/dd HH:mm:ss} %p %c{1}: %m%n\nappender.rolling.policies.type = Policies\nappender.rolling.policies.size.type = SizeBasedTriggeringPolicy\nappender.rolling.policies.size.size = 100MB\nappender.rolling.strategy.type = DefaultRolloverStrategy\nappender.rolling.strategy.max = 10\n  \nappender.console.type = Console\nappender.console.name = console\nappender.console.target = SYSTEM_ERR\nappender.console.layout.type = PatternLayout\nappender.console.layout.pattern = %d{yy/MM/dd HH:mm:ss} %p %c{1}: %m%n\n  \n# Set the default spark-shell/spark-sql log level to WARN. When running the\n# spark-shell/spark-sql, the log level for these classes is used to overwrite\n# the root logger's log level, so that the user can have different defaults\n# for the shell and regular Spark apps.\nlogger.repl.name = org.apache.spark.repl.Main\nlogger.repl.level = warn\n  \nlogger.thriftserver.name = org.apache.spark.sql.hive.thriftserver.SparkSQLCLIDriver\nlogger.thriftserver.level = warn\n  \n# Settings to quiet third party logs that are too verbose\nlogger.jetty1.name = org.sparkproject.jetty\nlogger.jetty1.level = warn\nlogger.jetty2.name = org.sparkproject.jetty.util.component.AbstractLifeCycle\nlogger.jetty2.level = error\nlogger.replexprTyper.name = org.apache.spark.repl.SparkIMain$exprTyper\nlogger.replexprTyper.level = info\nlogger.replSparkILoopInterpreter.name = org.apache.spark.repl.SparkILoop$SparkILoopInterpreter\nlogger.replSparkILoopInterpreter.level = info\nlogger.parquet1.name = org.apache.parquet\nlogger.parquet1.level = error\nlogger.parquet2.name = parquet\nlogger.parquet2.level = error\nlogger.hudi.name = org.apache.hudi\nlogger.hudi.level = warn\n  \n# SPARK-9183: Settings to avoid annoying messages when looking up nonexistent UDFs in SparkSQL with Hive support\nlogger.RetryingHMSHandler.name = org.apache.hadoop.hive.metastore.RetryingHMSHandler\nlogger.RetryingHMSHandler.level = fatal\nlogger.FunctionRegistry.name = org.apache.hadoop.hive.ql.exec.FunctionRegistry\nlogger.FunctionRegistry.level = error\n  \n# For deploying Spark ThriftServer\n# SPARK-34128: Suppress undesirable TTransportException warnings involved in THRIFT-4805\nappender.console.filter.1.type = RegexFilter\nappender.console.filter.1.regex = .*Thrift error occurred during processing of message.*\nappender.console.filter.1.onMatch = deny\nappender.console.filter.1.onMismatch = neutral\nappender.rolling.filter.1.type = RegexFilter\nappender.rolling.filter.1.regex = .*Thrift error occurred during processing of message.*\nappender.rolling.filter.1.onMatch = deny\nappender.rolling.filter.1.onMismatch = neutral\n"})})]})}function g(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>s});var t=n(6540);const o={},a=t.createContext(o);function l(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);