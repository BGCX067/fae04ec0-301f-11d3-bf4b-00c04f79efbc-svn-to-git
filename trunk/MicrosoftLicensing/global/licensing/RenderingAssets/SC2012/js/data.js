// JavaScript Document
BuyersGuide = {};

BuyersGuide.Entry = function(text, categories, treeNote) {
	this.Text = text;
	this.Categories = categories;
	this.TreeNote = treeNote;
	this.toString = function() { return "BuyersGuide.Entry"; };
}

BuyersGuide.Category = function(text, categories, questions, treeNote) {
	this.Text = text;
	this.Categories = categories;
	this.Questions = questions;
	this.TreeNote = treeNote;
	this.toString = function() { return "BuyersGuide.Category"; };
}

BuyersGuide.Question = function(text, answer, questions, treeNote) {
	this.Text = text;
	this.Answer = answer;
	this.Questions = questions;
	this.TreeNote = treeNote;
	this.toString = function() { return "BuyersGuide.Question"; };
}

BuyersGuide.Answer = function (text, treeNote) {
    this.Text = text;
    this.TreeNote = treeNote;
    this.toString = function () { return "BuyersGuide.Answer"; };
}

BuyersGuide.InitData = new function () {
    var entries = [];

    //entries
    var newCustomer = new BuyersGuide.Entry("New Customer", null, "<b>New Customer</b><br />Topics");
    newCustomer.Categories = [];

    var existingCustomer = new BuyersGuide.Entry("Existing Customer", null, "<b>Existing Customer</b><br />Topics");
    existingCustomer.Categories = [];

    var whatsNew = new BuyersGuide.Entry("What's New", null, "<b>What's New</b><br />Topics");
    whatsNew.Categories = [];

    var featuresFunctionality = new BuyersGuide.Entry("Features and Functionality", null, "<b>Features and Functionality</b><br />Topics");
    featuresFunctionality.Categories = [];

    var generalLicensingInfo = new BuyersGuide.Entry("General Licensing Information", null, "<b>General Licensing Information</b><br />Topics");
    generalLicensingInfo.Categories = [];

    entries.push(newCustomer);
    entries.push(existingCustomer);
    entries.push(whatsNew);
    entries.push(featuresFunctionality);
    entries.push(generalLicensingInfo);

    //New Customer
    var volumeLicensingCategory = new BuyersGuide.Category("Licensing Information", null, null, "<b>Licensing Information</b> <br />Common Questions");
    volumeLicensingCategory.Questions = [];

    var vlc_q1 = new BuyersGuide.Question("Where do I find licensing and Use Rights details?", null, null, "<b>Licensing Information</b> <br />Just one more step!");
    vlc_q1.Questions = [];

    vlc_q1.Questions.push(new BuyersGuide.Question("How do I license third party Operating System Environments (OSEs)?", new BuyersGuide.Answer("Third party OSEs are licensed the same way Windows-based OSEs are licensed.  Managed servers need to be licensed with System Center 2012 Standard or Datacenter edition Management Licenses. Managed clients need to be licensed with Client Management Licenses.", "<b>Licensing Information</b><br />Answer"), null, null));
    vlc_q1.Questions.push(new BuyersGuide.Question("How do I license cloud based solutions (including Azure and other cloud platforms)?", new BuyersGuide.Answer("Managed Operating System Environments (OSEs) running on public cloud platforms can be licensed through the License Mobility through Software Assurance benefit for both System Center Server Management License editions. For more information, see the <a href='http://www.microsoft.com/licensing/software-assurance/license-mobility.aspx#tab=2' target='_new'>License Mobility through Software Assurance Customer Guide</a>.", "<b>Licensing Information</b><br />Answer"), null, null));
    vlc_q1.Questions.push(new BuyersGuide.Question("How do I license management server software?", new BuyersGuide.Answer("The right to run various management server software components, and a supporting SQL Server Standard edition runtime, are included with all Client or Server Management Licenses. No additional licenses need to be purchased to run these software items.", "<b>Licensing Information</b><br />Answer"), null, null));
    vlc_q1.Questions.push(new BuyersGuide.Question("How do I license managed servers and managed clients?", new BuyersGuide.Answer("Managed Servers are licensed with System Center 2012 Standard or System Center 2012 Datacenter Management Licenses (MLs).<br />Managed clients are licensed with one or more of the Client Management Licenses: System Center 2012 Configuration Manager Client ML, System Center 2012 Client Management Suite Client ML, and System Center 2012 Endpoint Protection Client ML.", "<b>Licensing Information</b><br />Answer"), null, null));
    vlc_q1.Questions.push(new BuyersGuide.Question("What are the downgrade rights for each product?", new BuyersGuide.Answer("License downgrade rights will be granted to previous products. License transitions and downgrade rights will be listed in the <a href='http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx' target='_new'>Product List</a>.", "<b>Licensing Information</b><br />Answer"), null, null));

    volumeLicensingCategory.Questions.push(vlc_q1);

    var vlc_q2 = new BuyersGuide.Question("What software components are included in the various Management Licenses?", null, null, "<b>Licensing Information</b><br /> Common Questions");
    vlc_q2.Questions = [];

    vlc_q2.Questions.push(new BuyersGuide.Question("Which software components are included in the System Center 2012 Server Management Licenses?", new BuyersGuide.Answer("Both editions of System Center 2012 Server Management Licenses include the following software components: Configuration Manager, Operations Manager, Virtual Machine Manager, Data Protection Manager, Service Manager, Orchestrator, and App Controller.", "<b>Licensing Information</b><br />Answer"), null, null));
    vlc_q2.Questions.push(new BuyersGuide.Question("Which software components are included in the System Center 2012 Client Management Suite?", new BuyersGuide.Answer("System Center 2012 Client Management Suite components include Operations Manager, Data Protection Manager, Service Manager, and Orchestrator.", "<b>Licensing Information</b><br />Answer"), null, null));

    volumeLicensingCategory.Questions.push(vlc_q2);

    var vlc_q3 = new BuyersGuide.Question("How do I license in a virtualized environment?", null, null, "<b>Licensing Information</b> <br />Common Questions");
    vlc_q3.Questions = [];

    vlc_q3.Questions.push(new BuyersGuide.Question("What are the virtualization rights with <br />Client Management Licenses?", new BuyersGuide.Answer("Client Management Licenses (MLs) purchased on a per Operating System Environment (OSE) basis provide for the management of a single OSE per license. Client Management Licenses purchased on a per user basis provide for the management of an unlimited number of OSEs associated with the licensed user. If you have more than one user using an OSE, and you are not licensed by OSE, you must assign a user client ML to each of the users.", "<b>Licensing Information</b><br />Answer"), null, null));
    vlc_q3.Questions.push(new BuyersGuide.Question("What are the virtualization rights with <br />Server Management Licenses?", new BuyersGuide.Answer("System Center 2012 Standard provides for the management of up to two Operating System Environments (OSEs),  and System Center 2012 Datacenter provides for the management of an unlimited number of OSEs.", "<b>Licensing Information</b><br />Answer"), null, null));

    volumeLicensingCategory.Questions.push(vlc_q3);

    newCustomer.Categories.push(volumeLicensingCategory);

    var nc_ppn_cat = new BuyersGuide.Category("Pricing, Part Numbers", null, null, "<b>Pricing, Part Numbers</b> <br /> Just one more step!");
    nc_ppn_cat.Questions = [];

    nc_ppn_cat.Questions.push(new BuyersGuide.Question("What are the part numbers for each product?", new BuyersGuide.Answer("Part numbers can be provided by authorized resellers.  An authorized reseller can be found at <a href='http://pinpoint.microsoft.com/en-US/home' target='_new'>Microsoft Pinpoint</a>.", "<b>Pricing, Part Numbers</b> <br /> Answer"), null, null));
    nc_ppn_cat.Questions.push(new BuyersGuide.Question("Where do I get pricing?", new BuyersGuide.Answer("Refer to the <a href='http://www.microsoft.com/en-us/server-cloud/buy/pricing-licensing.aspx' target='_new'>Product website</a> or contact an authorized reseller via <a href='http://pinpoint.microsoft.com/en-US/home' target='_new'>Microsoft Pinpoint</a>.", "<b>Pricing, Part Numbers</b> <br /> Answer"), null, null));

    newCustomer.Categories.push(nc_ppn_cat);

    var nc_iua_cat = new BuyersGuide.Category("Install, Upgrades, Activation", null, null, "<b>Install, Upgrades, Activation</b> <br /> Just one more step!");
    nc_iua_cat.Questions = [];

    nc_iua_cat.Questions.push(new BuyersGuide.Question("How do I activate?  Do I need product keys?", new BuyersGuide.Answer("Refer to the <a href='http://www.microsoft.com/licensing/existing-customers/product-activation.aspx' target='_new'>Product Activation</a> section on the Volume Licensing website.", "<b>Install, Upgrades, Activation</b> <br /> Answer"), null, null));

    newCustomer.Categories.push(nc_iua_cat);

    var nc_sr_cat = new BuyersGuide.Category("System Requirements", null, null, "<b>System Requirements</b> <br /> Just one more step!");
    nc_sr_cat.Questions = [];

    nc_sr_cat.Questions.push(new BuyersGuide.Question("Where do I find hardware requirements?", new BuyersGuide.Answer("System requirements for System Center product lines can be found on each product's requirements page:<br /><a href='http://onlinehelp.microsoft.com/appcontroller/gg696060.aspx' target='_new'>App Controller</a><br /><a href='http://technet.microsoft.com/en-us/library/gg682077.aspx' target='_new'>Configuration Manager</a><br /><a href='http://go.microsoft.com/fwlink/?LinkId=235368' target='_new'>Data Protection Manager</a><br /><a href='http://technet.microsoft.com/en-us/library/gg682077.aspx' target='_new'>Endpoint Protection Client Management License</a><br /><a href='http://technet.microsoft.com/en-us/library/hh205990.aspx' target='_new'>Operations Manager</a><br /><a href='http://technet.microsoft.com/en-us/library/hh420348.aspx' target='_new'>Orchestrator</a><br /><a href='http://go.microsoft.com/fwlink/?LinkId=232355' target='_new'>Service Manager</a><br /><a href='http://technet.microsoft.com/en-us/library/gg610592.aspx' target='_new'>Virtual Machine Manager</a><br /><a href='http://technet.microsoft.com/en-us/library/hh546785.aspx' target='_new'>Unified Installer</a>", "<b>System Requirements</b> <br /> Answer"), null, null));
    nc_sr_cat.Questions.push(new BuyersGuide.Question("Where do I find software requirements (i.e., Operating System/SQL)?", new BuyersGuide.Answer("Refer to <a href='http://technet.microsoft.com/en-us/library/hh546785.aspx' target='_new'>TechNet</a> for more information on software requirements.", "<b>System Requirements</b> <br /> Answer"), null, null));

    newCustomer.Categories.push(nc_sr_cat);

    var nc_deployment_cat = new BuyersGuide.Category("Deployment", null, null, "<b>Deployment</b> <br />Just one more step!");
    nc_deployment_cat.Questions = [];

    nc_deployment_cat.Questions.push(new BuyersGuide.Question("I need assistance with deployment planning.", new BuyersGuide.Answer("Refer to <a href='http://technet.microsoft.com/en-us/library/hh546785.aspx' target='_new'>TechNet</a> for more information or contact an authorized reseller via <a href='http://pinpoint.microsoft.com/en-US/home' target='_new'>Microsoft Pinpoint</a>.", "<b>Deployment</b> <br /> Answer"), null, null));

    newCustomer.Categories.push(nc_deployment_cat);

    //existing customer
    var ec_li_cat = new BuyersGuide.Category("Licensing Information", null, null, "<b>Licensing Information</b> <br /> Common Questions");
    ec_li_cat.Questions = [];

    var ec_li_cat_ve = new BuyersGuide.Question("How do I license in a virtualized environment?", null, null, "<b>Licensing Information</b> <br /> Just one more step!");
    ec_li_cat_ve.Questions = [];

    ec_li_cat_ve.Questions.push(new BuyersGuide.Question("How will my existing virtualization rights be affected?", new BuyersGuide.Answer("Virtualization rights under the System Center 2012 licenses will be equal to, or greater than licenses for software versions preceding System Center 2012. Pre-2012 standalone Server Management Licenses (MLs) provided for the management of one Operating System Environment (OSE) per license while System Center 2012 Standard provides for two OSEs.  Current Server Management Suite Enterprise (SMSE) and Server Management Suite Datacenter (SMSD) customers will receive System Center 2012 license grants that keep their virtualization rights unchanged. There is no change in virtualization rights for Client ML customers.", "<b>Licensing Information</b> <br /> Answer"), null, null));
    ec_li_cat_ve.Questions.push(new BuyersGuide.Question("What are the virtualization rights with Client Management Licenses?", new BuyersGuide.Answer("Client Management Licenses (MLs) purchased on a per Operating System Environment (OSE) basis provide for the management of a single OSE per license. Client Management Licenses purchased on a per user basis provide for the management of an unlimited number of OSEs associated with the licensed user.", "<b>Licensing Information</b> <br /> Answer"), null, null));
    ec_li_cat_ve.Questions.push(new BuyersGuide.Question("What are the virtualization rights with Server Management Licenses?", new BuyersGuide.Answer("System Center 2012 Standard provides for the management of up to two Operating System Environments (OSEs), and System Center 2012 Datacenter provides for the management of an unlimited number of OSEs.", "<b>Licensing Information</b> <br /> Answer"), null, null));
    ec_li_cat_ve.Questions.push(new BuyersGuide.Question("What are the new virtualization rights for Client and Server Management Licenses?", new BuyersGuide.Answer("System Center 2012 Standard Server Management License (ML) provides for the management of up to two Operating System Environments (OSEs). System Center 2012 Datacenter Server ML provides for the management of an unlimited number of OSEs.<br />Client Management Licenses purchased on a per OSE basis provide for the management of a single OSE per license. Client Management Licenses purchased on a per user basis provide for the management of an unlimited number OSEs associated with the licensed user.  If you have more than one user using an OSE, and you are not licensed by OSE, you must assign a user client ML to each of the users.", "<b>Licensing Information</b> <br /> Answer"), null, null));

    ec_li_cat.Questions.push(ec_li_cat_ve);

    var ec_li_cat_urd = new BuyersGuide.Question("Where do I find licensing and Use Rights details?", null, null, "<b>Licensing Information</b> <br /> Just one more step!");
    ec_li_cat_urd.Questions = [];

    ec_li_cat_urd.Questions.push(new BuyersGuide.Question("How do I license third party Operating System Environments (OSEs)?", new BuyersGuide.Answer("Third party OSEs are licensed the same way Windows-based OSEs are licensed.  Managed servers need to be licensed with System Center 2012 Standard or Datacenter edition Management Licenses. Managed clients need to be licensed with Client Management Licenses.", "<b>Licensing Information</b> <br /> Answer"), null, null));
    ec_li_cat_urd.Questions.push(new BuyersGuide.Question("How do I license cloud based solutions (including Azure and other cloud platforms)?", new BuyersGuide.Answer("Managed Operating System Environments (OSEs) running on public cloud platforms can be licensed through the License Mobility through Software Assurance benefit for both System Center Server Managed License (ML) editions.  For more information, see the <a href='http://www.microsoft.com/licensing/software-assurance/license-mobility.aspx#tab=2' target='_new'>License Mobility through Software Assurance Customer Guide</a>.", "<b>Licensing Information</b> <br /> Answer"), null, null));
    ec_li_cat_urd.Questions.push(new BuyersGuide.Question("How do I license management server software?", new BuyersGuide.Answer("The right to run various management server software components, and a supporting SQL Server Standard Edition runtime, are included with all Client or Server Management Licenses. No additional licenses need to be purchased to run these software items.", "<b>Licensing Information</b> <br /> Answer"), null, null));
    ec_li_cat_urd.Questions.push(new BuyersGuide.Question("How do I license managed servers and managed clients?", new BuyersGuide.Answer("Managed Servers are licensed with System Center 2012 Standard or System Center 2012 Datacenter Management Licenses (MLs).<br />Managed clients are licensed with one or more of the Client Management Licenses: System Center 2012 Configuration Manager Client ML, System Center 2012 Client Management Suite Client ML, and System Center 2012 Endpoint Protection Client ML.", "<b>Licensing Information</b> <br /> Answer"), null, null));
    ec_li_cat_urd.Questions.push(new BuyersGuide.Question("What are the downgrade rights for each product?", new BuyersGuide.Answer("License transitions will be listed in the <a href='http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=2' target='_new'>Product List</a> and downgrade rights will be granted to previous products.", "<b>Licensing Information</b> <br /> Answer"), null, null));

    ec_li_cat.Questions.push(ec_li_cat_urd);

    existingCustomer.Categories.push(ec_li_cat);

    var ec_sa_cat = new BuyersGuide.Category("Software Assurance", null, null, "<b>Software Assurance</b><br /> Common Questions");
    ec_sa_cat.Categories = [];

    var ec_sa_cat_sab = new BuyersGuide.Category("Software Assurance Benefits", null, null, "<b>Software Assurance</b> <br /> Just one more step!");
    ec_sa_cat_sab.Questions = [];

    ec_sa_cat.Categories.push(ec_sa_cat_sab);

    ec_sa_cat_sab.Questions.push(new BuyersGuide.Question("What Software Assurance benefits other than New Product Versions do I receive?", new BuyersGuide.Answer("Go to the <a href='https://www.microsoft.com/licensing/servicecenter/default.aspx' target='_new'>Volume Licensing Service Center (VLSC)</a> for a report on your available Software Assurance benefits. For additional information on Software Assurance, please visit the <a href='http://www.microsoft.com/licensing/software-assurance/default.aspx' target='_new'>Software Assurance homepage</a>.", "<b>Software Assurance</b> <br /> Answer"), null, null));

    var ec_sa_cat_mp = new BuyersGuide.Category("Migration Path", null, null, "<b>Software Assurance</b><br /> Just one more step!");
    ec_sa_cat_mp.Questions = [];

    ec_sa_cat_mp.Questions.push(new BuyersGuide.Question("What is the migration path for current Server Management Licenses?", new BuyersGuide.Answer("Customers with active Software Assurance on the product release date will have access to new product versions and license grants as specified in the <a href='http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=2' target='_new'>Product List</a>.", "<b>Software Assurance</b> <br /> Answer"), null, null));
    ec_sa_cat_mp.Questions.push(new BuyersGuide.Question("What is the migration path for Client Management Licenses?", new BuyersGuide.Answer("Customers with active Software Assurance on the product release date will have access to new product versions and license grants as specified in the <a href='http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=2' target='_new'>Product List</a>.", "<b>Software Assurance</b> <br /> Answer"), null, null));
    ec_sa_cat_mp.Questions.push(new BuyersGuide.Question("What is the migration path for Management Server Licenses?", new BuyersGuide.Answer("Customers with active Software Assurance on the product release date will have access to new product versions and license grants as specified in the <a href='http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=2' target='_new'>Product List</a>.", "<b>Software Assurance</b> <br /> Answer"), null, null));
    ec_sa_cat_mp.Questions.push(new BuyersGuide.Question("What is the migration path for Client Management License and Server Management License suites?", new BuyersGuide.Answer("Customers with active Software Assurance on the product release date will have access to new product versions and license grants as specified in the <a href='http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=2' target='_new'>Product List</a>.", "<b>Software Assurance</b> <br /> Answer"), null, null));
    ec_sa_cat_mp.Questions.push(new BuyersGuide.Question("Can I step up from System Center 2012 Standard edition to Datacenter edition?", new BuyersGuide.Answer("Customers with active Software Assurance on the product release date will be granted new System Center 2012 licenses for qualifying old licenses. Customers with System Center 2012 Standard edition can then step up to be able to transition old licenses to new version licenses first, then step up to Datacenter edition.", "<b>Software Assurance</b> <br /> Answer"), null, null));

    ec_sa_cat.Categories.push(ec_sa_cat_mp);

    existingCustomer.Categories.push(ec_sa_cat);

    var ec_iua_cat = new BuyersGuide.Category("Install, Upgrades,  Activation", null, null, "<b>Install, Upgrades, Activation</b> <br /> Common Questions");
    ec_iua_cat.Categories = [];

    var ec_iua_cat_apk = new BuyersGuide.Category("Activation and Product Keys", null, null, "<b>Install, Upgrades, Activation</b> <br / > Just one more step!");
    ec_iua_cat_apk.Questions = [];

    ec_iua_cat_apk.Questions.push(new BuyersGuide.Question("Does the product require activation?", new BuyersGuide.Answer("Refer to the <a href='http://www.microsoft.com/licensing/existing-customers/product-activation.aspx' target='_new'>Product Activation</a> section on the Volume Licensing website.", "<b>Install, Upgrades, Activation</b> <br /> Answer"), null, null));
    ec_iua_cat_apk.Questions.push(new BuyersGuide.Question("Where do I find my product keys?", new BuyersGuide.Answer("Refer to the <a href='https://www.microsoft.com/licensing/servicecenter/default.aspx' target='_new'>Volume Licensing Service Center</a> (VLSC) and <a href='http://www.microsoft.com/licensing/existing-customers/product-activation.aspx' target='new'>Product Activation</a> websites. ", "<b>Install, Upgrades, Activation</b> <br /> Answer"), null, null));

    ec_iua_cat.Categories.push(ec_iua_cat_apk);

    var ec_iua_cat_u = new BuyersGuide.Category("Upgrades", null, null, "<b>Install, Upgrades, Activation</b> <br /> Just one more step!");
    ec_iua_cat_u.Questions = [];

    ec_iua_cat_u.Questions.push(new BuyersGuide.Question("Can I do an in-place or technical upgrade?", new BuyersGuide.Answer("Refer to <a href='http://technet.microsoft.com/en-us/library/hh546785.aspx' target='_new'>TechNet</a> for more information on upgrades.", "<b>Install, Upgrades, Activation</b> <br /> Answer"), null, null));
    ec_iua_cat_u.Questions.push(new BuyersGuide.Question("Can I purchase upgrade licenses to convert my current licenses to the new System Center 2012 licenses?", new BuyersGuide.Answer("Current version licenses are only convertible to System Center 2012 if the existing licenses have active Software Assurance coverage when System Center 2012 becomes generally available.  Version upgrade licenses are not available.", "<b>Install, Upgrades, Activation</b> <br /> Answer"), null, null));

    ec_iua_cat.Categories.push(ec_iua_cat_u);

    var ec_iua_cat_i = new BuyersGuide.Category("Install", null, null, "<b>Install, Upgrades, Activation</b> <br /> Just one more step!");
    ec_iua_cat_i.Questions = [];

    ec_iua_cat_i.Questions.push(new BuyersGuide.Question("Do I need to do a fresh install?", new BuyersGuide.Answer("Refer to <a href='http://technet.microsoft.com/en-us/library/hh546785.aspx' target='_new'>TechNet</a> for more install information. ", "<b>Install, Upgrades, Activation</b> <br /> Answer"), null, null));
    ec_iua_cat_i.Questions.push(new BuyersGuide.Question("I need assistance with deployment planning.", new BuyersGuide.Answer("Refer to <a href='http://technet.microsoft.com/en-us/library/hh546785.aspx' target='_new'>TechNet</a> for more information or contact an authorized reseller via <a href='http://pinpoint.microsoft.com/en-US/home' target='_new'>Microsoft Pinpoint</a>.", "<b>Install, Upgrades, Activation</b> <br /> Answer"), null, null));

    ec_iua_cat.Categories.push(ec_iua_cat_i);

    existingCustomer.Categories.push(ec_iua_cat);

    var ec_ppnd_cat = new BuyersGuide.Category("Pricing, Part Numbers, Download", null, null, "<b>Pricing, Part Numbers, Download</b> <br /> Just one more step!");
    ec_ppnd_cat.Questions = [];

    ec_ppnd_cat.Questions.push(new BuyersGuide.Question("Where do I download my products?", new BuyersGuide.Answer("Refer to the <a href='https://licensing.microsoft.com' target='_new'>Volume Licensing Service Center</a> (VLSC) for downloading and managing your licensing agreements. ", "<b>Pricing, Part Numbers, Download</b> <br /> Answer"), null, null));
    ec_ppnd_cat.Questions.push(new BuyersGuide.Question("What is the pricing for individual Client and Server Management Licenses?", new BuyersGuide.Answer("Refer to the <a href='http://www.microsoft.com/en-us/server-cloud/buy/pricing-licensing.aspx' target='_new'>Product website</a> or contact an authorized reseller via <a href='http://pinpoint.microsoft.com/en-US/home' target='_new'>Microsoft Pinpoint</a>.", "<b>Pricing, Part Numbers, Download</b> <br /> Answer"), null, null));
    ec_ppnd_cat.Questions.push(new BuyersGuide.Question("What are the part numbers for each product?", new BuyersGuide.Answer("Part numbers can be provided by authorized resellers.  An authorized reseller can be found at <a href='http://pinpoint.microsoft.com/en-US/home' target='_new'>Microsoft Pinpoint</a>. ", "<b>Pricing, Part Numbers, Download</b> <br /> Answer"), null, null));
    ec_ppnd_cat.Questions.push(new BuyersGuide.Question("Do I need to differentiate workload type for System Center 2012?", new BuyersGuide.Answer("Both System Center 2012 Standard and Datacenter product licenses allow the ability to manage any type of workload. Customers no longer need to differentiate workload type to choose which product license to purchase.", "<b>Pricing, Part Numbers, Download</b> <br /> Answer"), null, null));
    ec_ppnd_cat.Questions.push(new BuyersGuide.Question("Can I purchase each of the System Center 2012 components separately?", new BuyersGuide.Answer("All the components are included in the System Center 2012 integrated product licenses. The System Center 2012 components are designed  to work as an integrated solution to create and manage private cloud environments.", "<b>Pricing, Part Numbers, Download</b> <br /> Answer"), null, null));

    existingCustomer.Categories.push(ec_ppnd_cat);

    var ec_opal_cat = new BuyersGuide.Category("Opalis/AVIcode Software Assurance Migration", null, null, "<b>Opalis/AVIcode Software Assurance Migration</b> <br /> Just one more step!");
    ec_opal_cat.Questions = [];

    ec_opal_cat.Questions.push(new BuyersGuide.Question("What are the migration path and/or license grant options for Opalis and AVIcode?", new BuyersGuide.Answer("Opalis use rights are currently granted to Server Management Suite Datacenter (SMSD), Server Management Suite Enterprise (SMSE), and Client Management Suite customers. Opalis will be released as 'Orchestrator' in the 2012 release and will be included in the System Center 2012 Standard and Datacenter Server Management Licenses, as well as the System Center 2012 Client Management Suite.", "<b>Opalis/AVIcode Software Assurance Migration</b> <br /> Answer"), null, null));

    existingCustomer.Categories.push(ec_opal_cat);

    var wn_nls_cat = new BuyersGuide.Category("New Licensing Structure", null, null, "<b>New Licensing Structure</b> <br /> Common Questions");
    wn_nls_cat.Questions = [];

    wn_nls_cat.Questions.push(new BuyersGuide.Question("What's changed in the new licensing structure?", new BuyersGuide.Answer("The right to run management server software, and a supporting SQL Server Standard Edition runtime, are now included with every Client and Server Management License. The licensing model has been simplified to two editions of Server Management Licenses and three editions of Client Management Licenses.", "<b>New Licensing Structure</b> <br /> Answer"), null, null));

    var wn_nsl_cat_ve = new BuyersGuide.Question("How do I license in a virtualized environment?", null, null, "<b>New Licensing Structure</b> <br /> Just one more step!");
    wn_nsl_cat_ve.Questions = [];

    wn_nls_cat.Questions.push(wn_nsl_cat_ve);

    wn_nsl_cat_ve.Questions.push(new BuyersGuide.Question("How will my existing virtualization rights be affected?", new BuyersGuide.Answer("Virtualization rights under the System Center 2012 licenses will be equal to, or greater than licenses for software versions preceding System Center 2012. Pre-2012 standalone Server Management Licenses (MLs) provided for the management of one Operating System Environment (OSE) per license while System Center 2012 Standard provides for two OSEs. Current Server Management Suite Enterprise (SMSE) and Server Management Suite Datacenter (SMSD) customers will receive System Center 2012 license grants that keep their virtualization rights unchanged. There is no change in virtualization rights for Client ML customers.", "<b>New Licensing Structure</b> <br /> Answer"), null, null));
    wn_nsl_cat_ve.Questions.push(new BuyersGuide.Question("What are the new virtualization rights for Client and Server Management Licenses?", new BuyersGuide.Answer("System Center 2012 Standard Server Management License (ML) provides for the management of up to two Operating System Environments (OSEs). System Center 2012 Datacenter Server ML provides for the management of an unlimited number of OSEs.<br />Client Management Licenses purchased on a per OSE basis provide for the management of a single OSE per license. Client Management Licenses purchased on a per user basis provide for the management of an unlimited number OSEs associated with the licensed user.  If you have more than one user using an OSE, and you are not licensed by OSE, you must assign a user client ML to each of the users.", "<b>New Licensing Structure</b> <br /> Answer"), null, null));

    whatsNew.Categories.push(wn_nls_cat);

    var wn_nff_cat = new BuyersGuide.Category("New Features and Functionality", null, null, "<b>New Features and Functionality</b> <br /> Just one more step!");
    wn_nff_cat.Questions = [];

    wn_nff_cat.Questions.push(new BuyersGuide.Question("What are new features in System Center 2012?", new BuyersGuide.Answer("Refer to product specific changes on the <a href='http://www.microsoft.com/en-us/server-cloud/system-center/components.aspx' target='_new'>Product website</a>.", "<b>New Features and Functionality</b> <br /> Answer"), null, null));

    whatsNew.Categories.push(wn_nff_cat);

    var wn_nsmlc_cat = new BuyersGuide.Category("New Server Management License Changes", null, null, "<b>New Server Management License Changes</b> <br /> Just one more step!");
    wn_nsmlc_cat.Questions = [];

    wn_nsmlc_cat.Questions.push(new BuyersGuide.Question("How are the System Center 2012 Server Management License editions different from the previous Server Management Suites (SMSE and SMSD)?", new BuyersGuide.Answer("Both System Center 2012 Server Management License (ML) editions include the new App Controller component.<br /> System Center 2012 Standard is licensed for up to two processors and provides for the management of up to two Operating System Environments (OSEs), while Server Management Suite Enterprise (SMSE) was licensed per device and supported four OSEs.   <br />System Center 2012 Datacenter is licensed for up to two processors while Server Management Suite Datacenter (SMSD) was licensed per processor, the unlimited virtualization use rights stay unchanged.", "<b>New Server Management License Changes</b> <br /> Answer"), null, null));

    whatsNew.Categories.push(wn_nsmlc_cat);

    var ff_sd_cat = new BuyersGuide.Category("Software Dependencies", null, null, "<b>Software Dependencies</b> <br /> Just one more step!");
    ff_sd_cat.Questions = [];

    ff_sd_cat.Questions.push(new BuyersGuide.Question("What are the product dependencies within the System Center product family?", new BuyersGuide.Answer("Endpoint Protection is dependent on System Center Configuration Manager (SCCM) to centrally manage.", "<b>Software Dependencies</b> <br /> Answer"), null, null));

    featuresFunctionality.Categories.push(ff_sd_cat);

    var ff_st_cat = new BuyersGuide.Category("SQL Technology", null, null, "<b>SQL Technology</b> <br /> Just one more step!");
    ff_st_cat.Questions = [];

    ff_st_cat.Questions.push(new BuyersGuide.Question("How has the delivery of the SQL Server runtime changed?", new BuyersGuide.Answer("The right to run various management server software components, and a supporting SQL Server Standard edition runtime, is included with all Client or Server Management Licenses.  No additional licenses need to be purchased to run these software items.", "<b>SQL Technology</b> <br /> Answer"), null, null));

    featuresFunctionality.Categories.push(ff_st_cat);

    var gli_lt_cat = new BuyersGuide.Category("Licensing Tool", null, null, "<b>Licensing Tool</b> <br /> Just one more step!");
    gli_lt_cat.Questions = [];

    gli_lt_cat.Questions.push(new BuyersGuide.Question("How do I determine licensing for my environment?", new BuyersGuide.Answer("Refer to the <a href='http://www.microsoft.com/licensing/mla/default.aspx' target='_new'>Microsoft License Advisor</a> for more information on how to determine licensing for your environment.", "<b>Licensing Tool</b> <br /> Answer"), null, null));

    generalLicensingInfo.Categories.push(gli_lt_cat);

    var gli_vl_cat = new BuyersGuide.Category("Volume Licensing", null, null, "<b>Volume Licensing</b> <br /> Just one more step!");
    gli_vl_cat.Questions = [];

    gli_vl_cat.Questions.push(new BuyersGuide.Question("How do I license third  party Operating System Environments (OSEs)?", new BuyersGuide.Answer("Third party Operating System Environments (OSEs) are licensed the same way Windows-based OSEs are licensed. Managed servers need to be licensed with System Center 2012 Standard or Datacenter edition Management Licenses.  Managed clients need to be licensed with Client Management Licenses.", "<b>Volume Licensing</b> <br /> Answer"), null, null));
    gli_vl_cat.Questions.push(new BuyersGuide.Question("How do I license cloud based solutions (including Azure and other cloud platforms)?", new BuyersGuide.Answer("Managed Operating System Environments (OSEs) running on public cloud platforms can be licensed through the License Mobility through Software Assurance benefit for both System Center Server Management License editions. For more information, see the <a href='http://www.microsoft.com/licensing/software-assurance/license-mobility.aspx#tab=2' target='_new'>License Mobility through Software Assurance Customer Guide</a>.", "<b>Volume Licensing</b> <br /> Answer"), null, null));
    gli_vl_cat.Questions.push(new BuyersGuide.Question("How do I license management server software?", new BuyersGuide.Answer("The right to run various management server software components, and a supporting SQL Server Standard Edition runtime, are included with all Client or Server Management Licenses. No additional licenses need to be purchased to run these software items.", "<b>Volume Licensing</b> <br /> Answer"), null, null));
    gli_vl_cat.Questions.push(new BuyersGuide.Question("How do I license managed servers and managed clients?  ", new BuyersGuide.Answer("Managed servers are licensed with System Center 2012 Standard or System Center 2012 Datacenter Management Licenses.<br />Managed clients are licensed with one or more of the Client Management Licenses (MLs): System Center 2012 Configuration Manager Client ML, System Center 2012 Client Management Suite Client ML, and System Center 2012 Endpoint Protection Client ML.", "<b>Volume Licensing</b> <br /> Answer"), null, null));

    generalLicensingInfo.Categories.push(gli_vl_cat);

    var guide = new LCA.Guide("#test-guide", entries);
}