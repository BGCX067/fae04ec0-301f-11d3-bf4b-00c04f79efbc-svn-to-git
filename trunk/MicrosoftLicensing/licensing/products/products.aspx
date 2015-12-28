<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true"
    CodeBehind="products.aspx.cs" Inherits="licensing_products_products" %>

<%@ Register TagPrefix="x" TagName="SocialShare" Src="~/UserControls/SocialShare.ascx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <div class="main-content">
        <div class="main-wrap">
            <x:SocialShare ID="SocialShare" runat="server" />
        </div>
        <div class="main-wrap">
            <div class="landing_two_cols">
                <div class="landing_middle_col">
                    <div class="top_middle">
                        <h2>
                            Volume Licensing for Microsoft Products</h2>
                        <p>
                            Which products do you want to license, and how will you use them? The resources
                            on this page will help you find available products and provide you with the information
                            that you need to get started with product licensing.</p>
                    </div>
                    <div class="middle_two_col products">
                        <!--Add tabs-->
                        <div id="tabs" class="prodLanding">
                            <div id="tab-nav" class="prodTabNav">
                                <ul style="margin-bottom: 1em">
                                    <li class="first firstActive active prodLicNavTab" id="tab-link-1"><a href="#tab_1">
                                        <span>Product Licensing</span></a></li>
                                    <li class="last last-list-item prodLicNavTab" id="tab-link-2"><a href="#tab_2"><span>
                                        Find Products</span></a></li>
                                </ul>
                            </div>
                            <div id="tab-content" class="prodTabsContent">
                                <div id="tab_1" style="display: none" class="prodLicTab show">
                                    <div class="middle_col first_col">
                                        <h3>
                                            <a href="/licensing/about-licensing/product-licensing.aspx">Product Use Rights</a></h3>
                                        <p>
                                            Download data transfer notices, the terms and conditions for how you can use your
                                            licensed software, and information to help you better understand these Product Use
                                            Rights.</p>
                                        <p>
                                        </p>
                                        <h4 class="more_infolink">
                                            More Information</h4>
                                        <ul class="landing_list">
                                            <li><a href="http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=3&amp;DocumentTypeId=1"
                                                target="_blank">Download current Product Use Rights</a></li><li><a href="http://www.microsoft.com/licensing/pur/products.aspx">
                                                    Create a Customized Product Use Rights Document</a></li><li><a href="http://www.microsoftvolumelicensing.com/"
                                                        target="_blank">Find Supplemental Product Licensing Information</a></li><li><a href="http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=1">
                                                            Product Use Rights Archive</a></li></ul>
                                    </div>
                                    <div class="middle_col last_col">
                                        <h3>
                                            <a href="http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=2">
                                                Product List</a></h3>
                                        <p>
                                            Download the complete list of more than 260 products that are available through
                                            Microsoft Volume Licensing, as well as archived Product Lists from 1998 to the present.
                                            The Product List includes information about product availability, discontinuations,
                                            migration paths, and Software Assurance benefits.</p>
                                        <ul class="landing_list">
                                            <li><a href="http://www.microsoftvolumelicensing.com/DocumentSearch.aspx?Mode=3&amp;DocumentTypeId=3"
                                                target="_blank">Download current Product List</a></li><li><a href="http://www.microsoft.com/licensing/about-licensing/product-licensing.aspx#tab=2">
                                                    Product List Archive</a></li></ul>
                                    </div>
                                    <div class="middle_col first_col secondrow">
                                        <h3>
                                            Hot Topics</h3>
                                        <p>
                                            Get information on featured industry trends and answers to questions about popular
                                            Volume Licensing subjects.</p>
                                        <ul class="landing_list">
                                            <li><a href="/licensing/products/consumerization-of-it.aspx">Licensing for the Consumerization
                                                of IT</a></li><li><a href="/licensing/products/innovations-for-the-cloud.aspx">Licensing
                                                    Innovations for the Cloud</a></li><li><a href="/licensing/about-licensing/client-access-license.aspx">
                                                        Client Access Licenses (CALs)</a></li><li><a href="/licensing/about-licensing/virtualization.aspx">
                                                            Licensing for Virtual Environments</a></li><li><a href="/licensing/about-licensing/briefs/downgrade-rights.aspx">
                                                                Downgrade Rights</a></li></ul>
                                    </div>
                                    <div class="middle_col last_col secondrow">
                                        <h3>
                                            Specific Resources</h3>
                                        <p>
                                            These resources cover information ranging from complex licensing situations to specifics
                                            for servers, desktops, and virtualization.</p>
                                        <p>
                                        </p>
                                        <ul class="landing_list">
                                            <li><a href="http://www.microsoft.com/licensing/about-licensing/volume-licensing-briefs.aspx">
                                                Licensing Briefs</a></li><li><a href="/licensing/about-licensing/document-library.aspx">
                                                    Document Library</a></li><li><a href="/licensing/about-licensing/product-licensing-faq.aspx">
                                                        Product Licensing FAQ</a></li><li><a href="/licensing/online-services/faq.aspx">Online
                                                            Services FAQ</a></li></ul>
                                    </div>
                                </div>
                                <div id="tab_2" class="findProdTab" style="display: none">
                                    <div class="middle_col first_col windows_col">
                                        <h3 class="windows_header">
                                            &nbsp;</h3>
                                        <ul class="landing_list">
                                            <li><a href="/licensing/about-licensing/windows8.aspx">Windows 8</a></li><li><a href="/licensing/about-licensing/windowsserver2012.aspx">
                                                Windows Server 2012</a></li><li><a href="/licensing/about-licensing/windows7.aspx">Windows
                                                    7</a></li></ul>
                                    </div>
                                    <div class="middle_col last_col office_col">
                                        <h3 class="office_header">
                                            &nbsp;</h3>
                                        <ul class="landing_list">
                                            <li><a href="/licensing/about-licensing/office.aspx">Office 2013</a></li><li><a href="/licensing/about-licensing/office2010.aspx">
                                                Office 2010</a></li></ul>
                                    </div>
                                    <div class="middle_col first_col secondrow darkblue">
                                        <h3>
                                            Servers</h3>
                                        <ul class="landing_list">
                                            <li><a href="/licensing/about-licensing/windowsserver2012.aspx">Windows Server 2012</a></li><li>
                                                <a href="/licensing/about-licensing/sql2012.aspx">SQL Server 2012</a></li><li><a
                                                    href="/licensing/about-licensing/SystemCenter2012.aspx">Microsoft System Center
                                                    2012</a></li><li><a href="/licensing/about-licensing/dynamicsax.aspx">Microsoft Dynamics
                                                        AX 2012</a></li></ul>
                                    </div>
                                    <div class="middle_col last_col secondrow darkgreen">
                                        <h3>
                                            Online Services</h3>
                                        <ul class="landing_list">
                                            <li><a href="/licensing/online-services/default.aspx#tab=1">Microsoft Office 365</a></li><li>
                                                <a href="/licensing/online-services/default.aspx#tab=2">Microsoft Dynamics CRM Online</a></li><li>
                                                    <a href="/licensing/online-services/default.aspx#tab=3">Windows Azure Platform</a></li><li>
                                                        <a href="/licensing/online-services/default.aspx#tab=4">Windows Intune</a></li><li><a
                                                            href="/licensing/online-services/default.aspx#tab=5">Other Online Services</a></li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom_middle">
                    </div>
                </div>
                <div class="landing_right_col">
                    <div class="landing_right_top">
                        <div class="landing_login">
                            <div class="landing_loginlink">
                                <a href="https://www.microsoft.com/Licensing/servicecenter/default.aspx">Sign in to
                                    the<br>
                                    Volume Licensing Service Center</a></div>
                        </div>
                        <div class="landing_activate">
                            <div class="landing_activatelink">
                                <a href="/licensing/existing-customers/product-activation.aspx" target="_blank">Activate
                                    a Product</a></div>
                        </div>
                        <div class="landing_partner">
                            <div class="landing_partnerlink">
                                <a href="http://pinpoint.microsoft.com/companies/search/b1?fs=100010&amp;wt.mc_id=Deeplink_USLicense_Home_2_LicenseSpecilization&amp;q"
                                    target="_blank">Contact a Partner</a></div>
                        </div>
                    </div>
                    <div class="landing_right_middle products">
                        <h4>
                            Related Links</h4>
                        <ul class="landing_list">
                            <li><a href="/licensing/about-licensing/product-licensing.aspx">Product Use Rights Documents</a><br>
                                <p>
                                    Download the terms and conditions for how you can use your licensed software, as
                                    well as information to help you better understand these Product Use Rights.</p>
                            </li>
                            <li><a href="/licensing/about-licensing/product-licensing.aspx#tab=2">Product List</a><br>
                                <p>
                                    Download the complete list of products available through Microsoft Volume Licensing.</p>
                            </li>
                        </ul>
                        <!--<a href="" class="click_tochat">Click to Chat</a>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(document).ready(function () {
            // product tabs
            $("#tab-nav li").click(function (e) {
                e.preventDefault();

                // active the selected tab
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                };

                // unactive other items
                $("#tab-nav li").not($(this)).removeClass('active');

                // display corresponding tab content
                var index = $(this).index() + 1;
                var tabCount = $("#tab-nav li").length;
                for (var i = 1; i <= tabCount; i++) {
                    if (i == index) {
                        $("#tab_" + i).addClass('show');
                    } else {
                        $("#tab_" + i).removeClass('show');
                    }
                }
            });
        });
    </script>
</asp:Content>
