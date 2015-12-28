<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"
    CodeBehind="default.aspx.cs" Inherits="Licensing.licensing._default" %>

<%@ Register Src="../UserControls/SocialShare.ascx" TagName="SocialShare" TagPrefix="x" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <link href="/global/licensing/RenderingAssets/homepage/mt_home.css" rel="stylesheet"
        type="text/css" />
    <script src="/Scripts/slides.min.jquery.js" type="text/javascript"></script>
    <div class="main-content">
        <div class="main-wrap">
            <x:SocialShare ID="SocialShare" runat="server" />
            <div class="HomeHeaderBoxes">
                <div class="HomeHeaderBox FirstHeaderBox LightBlueBox">
                    <a href="http://www.microsoft.com/licensing/servicecenter/default.aspx" target="_blank">
                        <img src="/global/licensing/PublishingImages/homepage/msvl_homepage_tab1.png" alt="Đăng nhập vào Trung tâm cấp phép số lượng lớn (VL)"
                            height="85" width="168"></a></div>
                <div class="HomeHeaderBox GreenBox">
                    <a href="http://www.microsoft.com/licensing/existing-customers/product-activation.aspx"
                        target="_blank">
                        <img src="/global/licensing/PublishingImages/homepage/msvl_homepage_tab2.png" alt="Kích hoạt sản phẩm"
                            height="85" width="168"></a></div>
                <div class="HomeHeaderBox DarkBlueBox">
                    <a href="http://www.microsoft.com/licensing/software-assurance/home-use-program.aspx"
                        target="_blank">
                        <img src="/global/licensing/PublishingImages/homepage/msvl_homepage_tab3.png" alt="Chương trình sử dụng tại nhà là gì?"
                            height="85" width="168"></a></div>
                <div class="HomeHeaderBox PurpleBox">
                    <a href="/licensing/how-to-buy/how-to-buy.aspx">
                        <img src="/global/licensing/PublishingImages/homepage/msvl_homepage_tab4.png" alt="Tìm hiểu giá thành qua đối tác của Microsoft"
                            height="85" width="168"></a></div>
                <div class="HomeHeaderBox">
                    <a href="/">
                        <img src="/global/licensing/PublishingImages/homepage/msvl_homepage_tab5.png" alt=""
                            height="85" width="168"></a></div>
            </div>
        </div>
        <div class="main-wrap">
            <div class="two_cols">
                <div class="middle_col">
                    <div id="slides">
                        <div class="slides_container">
                            <div class="slide">
                                <div title="Tại sao lại cần cấp phép số lượng lớn?">
                                    <a class="" href="http://www.microsoft.com/licensing/about-licensing/how-volume-licensing-works.aspx">
                                        <img src="/global/licensing/PublishingImages/homepage/marquee-enterprise.png" alt="Tại sao lại cần cấp phép số lượng lớn ?"></a></div>
                            </div>
                            <div class="slide">
                                <div title="Thỏa thuận Doanh Nghiệp">
                                    <a class="" href="http://www.microsoft.com/licensing/licensing-options/enterprise.aspx">
                                        <img src="/global/licensing/PublishingImages/homepage/marquee-enterprise.jpg" alt="Thỏa thuận Doanh Nghiệp"></a></div>
                            </div>
                            <div class="slide">
                                <div title="Consumerization of IT">
                                    <a class="" href="http://www.microsoft.com/licensing/products/consumerization-of-it.aspx">
                                        <img src="/global/licensing/PublishingImages/homepage/msvl_homepage-marquee-consumerization-of-it.jpg"
                                            alt="Consumerization of IT"></a></div>
                            </div>
                        </div>
                    </div>
                    <div class="hp_middlecontent">
                        <div class="hp_middletab">
                            <div id="tabs" class="prodTabs">
                                <h2>
                                    Sản phẩm</h2>
                                <div id="tab-nav" class="prodTabNav">
                                    <ul>
                                        <li class="first firstActive active winNavTab" id="tab-link-1">
                                            <p class="">
                                                <a href="#tab_1"><span>Hệ điều hành</span></a></p>
                                        </li>
                                        <li class="afterActive offNavTab" id="tab-link-2">
                                            <p class="">
                                                <a href="#tab_2"><span>Ứng dụng văn phòng</span></a></p>
                                        </li>
                                        <li class="serverNavTab" id="tab-link-3">
                                            <p class="">
                                                <a href="#tab_3"><span>Dành cho máy chủ</span></a></p>
                                        </li>
                                        <li class="serviceNavTab" id="tab-link-4">
                                            <p class="">
                                                <a href="#tab_4"><span>Dịch vụ trực tuyến</span></a></p>
                                        </li>
                                        <li class="last last-list-item prodNavTab" id="tab-link-5">
                                            <p class="">
                                                <a href="#tab_5"><span>Tất cả sản phẩm</span></a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab-content" class="prodTabsContent">
                                    <div id="tab_1" class="prodContentTab show">
                                        <ul>
                                            <li><a href="http://www.microsoft.com/licensing/about-licensing/windows8.aspx">Windows
                                                8</a></li>
                                            <li><a href="http://www.microsoft.com/licensing/about-licensing/windowsserver2012.aspx">
                                                Windows Server 2012</a></li><li><a href="http://www.microsoft.com/licensing/about-licensing/windows7.aspx">
                                                    Windows 7</a></li></ul>
                                    </div>
                                    <div id="tab_2" class="prodContentTab">
                                        <ul>
                                            <li><a href="http://www.microsoft.com/licensing/about-licensing/office.aspx">Office
                                                2013</a></li><li><a href="http://www.microsoft.com/licensing/online-services/default.aspx#tab_1">
                                                    Microsoft Office 365</a></li><li><a href="http://www.microsoft.com/licensing/about-licensing/office2010.aspx">
                                                        Office 2010</a></li></ul>
                                    </div>
                                    <div id="tab_3" class="prodContentTab">
                                        <ul>
                                            <li><a href="http://www.microsoft.com/licensing/about-licensing/windowsserver2012.aspx">
                                                Windows Server 2012</a></li><li><a href="http://www.microsoft.com/licensing/about-licensing/SQL2012.aspx">
                                                    SQL Server 2012</a></li><li><a href="http://www.microsoft.com/licensing/about-licensing/SystemCenter2012.aspx">
                                                        Microsoft System Center 2012</a></li><li><a href="http://www.microsoft.com/licensing/about-licensing/dynamicsax.aspx">
                                                            Microsoft Dynamics AX 2012</a></li></ul>
                                    </div>
                                    <div id="tab_4" class="prodContentTab">
                                        <ul>
                                            <li><a href="http://www.microsoft.com/licensing/online-services/default.aspx#tab_1">
                                                Microsoft Office 365</a></li><li><a href="http://www.microsoft.com/licensing/online-services/default.aspx#tab_2">
                                                    Microsoft Dynamics CRM Online</a></li><li><a href="http://www.microsoft.com/licensing/online-services/default.aspx#tab=3">
                                                        Windows Azure Platform</a></li><li><a href="http://www.microsoft.com/licensing/online-services/default.aspx#tab=4">
                                                            Windows Intune</a></li><li><a href="http://www.microsoft.com/licensing/online-services/default.aspx">
                                                                Other Online Services</a></li></ul>
                                    </div>
                                    <div id="tab_5" class="prodContentTab">
                                        <ul>
                                            <li><a href="http://www.microsoftvolumelicensing.com/default.aspx" target="_blank">Tìm
                                                hiểu thông tin về các sản phẩm do Microsoft cấp phép, bao gồm các quyền lợi sử dụng,
                                                điểm định mức theo chương trình và các lưu ý đặc biệt.</a></li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hp_middleright">
                        <h2>
                            Blog</h2>
                        <div class="BlogFeed">
                            <div id="rssData1">
                                <div>
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="http://blogs.technet.com/b/volume-licensing/archive/2013/07/08/microsoft-assessment-and-planning-map-toolkit-8-5-now-available.aspx"
                                                        target="_blank" class="blogTitle">Microsoft Assessment and Planning (MAP) Toolkit
                                                        8.5 Now Available</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 2px;">
                                                    <p class="blogDate">
                                                        Monday, July 8, 2013 4:00 PM</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div>
                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="http://blogs.technet.com/b/volume-licensing/archive/2013/07/03/streamlining-sam-with-sql-clustering.aspx"
                                                        target="_blank" class="blogTitle">Streamlining SAM with SQL clustering</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 2px;">
                                                    <p class="blogDate">
                                                        Wednesday, July 3, 2013 11:00 AM</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right_col">
                    <div class="LicFlexiLay_lay_full ">
                        <div class="LicFlexiCol  LicFlexiLay_generic " style="width: 100%;">
                            <div class="LicFlexiRow ">
                                <div class="homepage_Accordian">
                                    <p class="homepage_Accordian_IWantTo">
                                        Tôi muốn…
                                    </p>
                                    <ul class="homepage_AccordianHeadings">
                                        <li>
                                            <h4 class="clicked">
                                                Cấp phép số lượng lớn mới</h4>
                                            <div class="homepage_AccordianContent" style="display: block;">
                                                <p>
                                                    <a href="/licensing/about-licensing/how-volume-licensing-works.aspx">Tìm hiểu thêm về
                                                        cách thức làm việc của việc cấp phép</a>
                                                </p>
                                                <p>
                                                    <a href="/licensing/licensing-options/for-organizations.aspx">Xác định mô hình của tổ
                                                        chức</a>
                                                </p>
                                                <p>
                                                    <a href="/licensing/licensing-options/for-industries.aspx">Tìm chương trình cấp phép
                                                        số lượng lớn cho tổ chức chuyên ngành</a>
                                                </p>
                                                <p>
                                                    <a href="http://mla.microsoft.com/default.aspx" target="_blank">Sử dụng License Advisor
                                                        để có dẫn chứng nhanh</a>
                                                </p>
                                                <p>
                                                    <a href="/licensing/how-to-buy/financing.aspx">Tìm hiểu một số giải pháp thanh toán
                                                        của Microsoft</a>
                                                </p>
                                                <p>
                                                    <a href="/licensing/software-assurance/default.aspx">Tìm hiểu về bảo hiểm phẩn mềm</a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>
                                                Khách hàng hiện tại</h4>
                                            <div class="homepage_AccordianContent">
                                                <p>
                                                    <a href="/licensing/existing-customers/manage-my-agreements.aspx">Quản lý giấy phép</a></p>
                                                <p>
                                                    <a href="/licensing/existing-customers/product-activation.aspx">Tìm product keys
                                                    </a>
                                                </p>
                                                <p>
                                                    <a href="/licensing/existing-customers/product-activation.aspx">Kích hoạt sản phẩm của
                                                        tôi</a></p>
                                                <p>
                                                    <a href="/licensing/licensing-options/for-organizations.aspx">Xem lại chương trình</a></p>
                                                <p>
                                                    <a href="/licensing/about-licensing/product-licensing.aspx">Xem lại quyền sử dụng sản
                                                        phẩm</a></p>
                                                <p>
                                                    <a href="/licensing/software-assurance/default.aspx">Sử dụng bảo hiểm phần mềm</a></p>
                                                <p>
                                                    <a href="/Licensing/servicecenter/default.aspx">Xem lại lịch sử mua hàng </a>
                                                </p>
                                                <p>
                                                    <a href="/licensing/existing-customers/fulfillment.aspx#tab=2">Tìm hiểu về nâng cấp</a></p>
                                                <p>
                                                    <a href="/licensing/online-services/how-to-buy.aspx">Đăng ký dịch vụ trực tuyến</a></p>
                                                <p>
                                                    <a href="/licensing/how-to-buy/how-to-buy.aspx">Gia hạn chương trình</a></p>
                                                <p>
                                                    <a href="/licensing/how-to-buy/how-to-buy.aspx">Mua</a></p>
                                                <p>
                                                    <a href="http://www.microsoft.com/en-us/download/details.aspx?id=3497" target="_blank">
                                                        Xây dựng quyền sử dụng sản phẩm tùy chỉnh</a></p>
                                                <p>
                                                    <a href="/licensing/training_accreditation.aspx">Trở thành chuyên gia Microsoft Licensing</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>
                                                Hỗ trợ giấy phép</h4>
                                            <div class="homepage_AccordianContent">
                                                <p>
                                                    <a href="/licensing/existing-customers/product-activation.aspx">Giúp đỡ kích hoạt sản
                                                        phẩm</a></p>
                                                <p>
                                                    <a href="/licensing/existing-customers/activation-centers.aspx">Liên hệ với trung tâm
                                                        kích hoạt số lượng lớn</a></p>
                                                <p>
                                                    <a href="https://www.microsoft.com/licensing/servicecenter/default.aspx">Truy cập vào
                                                        trung tâm kích hoạt số lượng</a></p>
                                                <p>
                                                    <a href="/licensing/existing-customers/manage-my-agreements.aspx">Xem video về trung
                                                        tâm kích hoạt số lượng</a></p>
                                                <p>
                                                    <a href="https://www.microsoft.com/licensing/servicecenter/Help/Contact.aspx">Liên hệ
                                                        với dịch vụ kích hoạt số lượng lớn</a></p>
                                                <p>
                                                    <a href=""></a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <h4>
                                                Hỗ trợ người dùng</h4>
                                            <div class="homepage_AccordianContent">
                                                <p>
                                                    <a href="http://support.microsoft.com/" target="_blank">Tìm các hỗ trợ về sản phẩm của
                                                        Microsoft </a>
                                                </p>
                                                <p>
                                                    <a href="http://support.microsoft.com/gp/support-options-for-home-users/en-us" target="_blank">
                                                        Hỗ trợ người dùng cá nhân</a></p>
                                                <p>
                                                    <a href="http://windows.microsoft.com/en-US/windows/support" target="_blank">Hỗ trợ
                                                        về Windows</a></p>
                                                <p>
                                                    <a href="http://office.microsoft.com/en-us/support/support-FX103999017.aspx?redir=0"
                                                        target="_blank">Hỗ trợ về Office</a></p>
                                                <p>
                                                    <a href="http://answers.microsoft.com/en-us" target="_blank">Tìm các câu trả lời trên
                                                        diễn đàn Microsoft</a></p>
                                                <p>
                                                    <a href=""></a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-wrap">
            <div class="hp_bottom_row">
                <div class="hp_bottom_text">
                    <h2>
                        Tìm hiểu về chương trình cấp phép số lượng lớn cho quy mô của tổ chức và chuyên
                        ngành của bạn</h2>
                </div>
                <div class="HomeMiddleBox FirstHeaderBox DarkBlueBox">
                    <a href="/licensing/licensing-programs/licensing-programs.aspx">
                        <img src="/global/licensing/PublishingImages/homepage/tile-small.png" alt="Doanh nghiệp nhỏ"
                            height="85" width="215"></a></div>
                <div class="HomeMiddleBox DarkBlueBox">
                    <a href="/licensing/licensing-programs/licensing-programs.aspx">
                        <img src="/global/licensing/PublishingImages/homepage/tile-midsize.png" alt="Doanh nghiệp vừa và lớn"
                            height="85" width="215"></a></div>
                <div class="HomeMiddleBox DarkBlueBox">
                    <a href="http://www.microsoftstore.com/" target="_blank">
                        <img src="/global/licensing/PublishingImages/homepage/tile-fewerthan5.png" alt="Doanh nghiệp cần ít hơn 5 giấy phép"
                            height="85" width="215"></a></div>
                <div class="HomeOrg">
                    <h3>
                        Tổ chức chuyên ngành</h3>
                    <ul class="HomeOrgList">
                        <li><a href="/licensing/licensing-options/for-industries.aspx#tab=1">Chính phủ</a></li><li>
                            <a href="/licensing/licensing-options/for-industries.aspx#tab=2">Giáo Dục</a></li><li>
                                <a href="/licensing/licensing-options/for-industries.aspx#tab=3">Y tế và sức khỏe</a></li><li>
                                    <a href="/licensing/licensing-options/for-industries.aspx#tab=4">Từ thiện</a></li></ul>
                </div>
                <div class="HomeOrg">
                    <h3>
                        Cho đối tác</h3>
                    <ul class="HomeOrgList">
                        <li><a href="/licensing/licensing-options/isv-program.aspx">Tiền bản quyền ISV</a></li><li>
                            <a href="/licensing/licensing-options/spla-program.aspx">Cung cấp dịch vụ cấp phép</a></li><li>
                                <a href="https://partner.microsoft.com/global/licensing" target="_blank">Mạng lưới đối
                                    tác của Microsoft</a></li></ul>
                </div>
            </div>
            <div class="hp_bottom_row_vid PurpleBox">
                <div id="tabs2" class="videoTabs">
                    <div id="tab2-nav" class="videoTabNav">
                        <ul>
                            <li class="active"><a href="#tab-1">Videos</a></li><li><a href="#tab-2">Tin tức và Tiêu
                                điểm</a></li></ul>
                    </div>
                    <div id="tab2-content" class="videoTabsContent">
                        <div id="tab-1" class="videoContentTab" style="display: block;">
                            <div id="viewport_home">
                                <ul id="video-list">
                                    <li><a href="http://www.microsoft.com/licensing/about-licensing/media/ws2012.asx">
                                        <img src="/global/licensing/PublishingImages/homepage/video-ws2012-03.png"></a><p>
                                            Explaining Windows Server 2012 Licensing (3:29)</p>
                                    </li>
                                    <li><a href="http://www.microsoft.com/licensing/licensing-options/media/office365.asx">
                                        <img src="/global/licensing/PublishingImages/homepage/video-Office365-hp.png"></a><p>
                                            Office 365 Open video(1:18)</p>
                                    </li>
                                    <li><a href="http://www.microsoft.com/licensing/online-services/media/microsoft_online_services.asx">
                                        <img src="http://www.microsoft.com/global/licensing/PublishingImages/homepage/video-online-services.png"></a><p>
                                            What Microsoft Online Services has to offer (3:13)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="tab-2" class="videoContentTab" style="display: none;">
                            <div id="viewport_home">
                                <ul id="video-list">
                                    <li><a href="http://www.microsoft.com/licensing/training_accreditation.aspx">
                                        <img src="/global/licensing/PublishingImages/homepage/icon-windows-lrg.png"></a><p>
                                            New Windows Customer Training</p>
                                    </li>
                                    <li><a href="http://blogs.technet.com/b/volume-licensing/archive/2013/01/04/comprehensive-joint-enterprise-licensing-agreement-brings-expansive-savings-for-u-s-department-of-defense-through-volume-licensing.aspx"
                                        target="_blank">
                                        <img src="/global/licensing/PublishingImages/homepage/icon-blog-story.png"></a><p>
                                            Enterprise Licensing Agreement Brings Expansive Savings for U.S. Department of Defense</p>
                                    </li>
                                    <li><a href="http://blogs.technet.com/b/mapblog/archive/2012/12/14/map-toolkit-8-0-is-now-available-for-download.aspx"
                                        target="_blank">
                                        <img src="/global/licensing/PublishingImages/homepage/icon-places.png"></a><p>
                                            Map toolkit 8.0 is now available for download</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(function () {
            $('#slides').slides({
                play: 4000,
                pause: 1500
            });
        });

        $(document).ready(function () {
            // check tab #
            var url = window.location.href, idx = url.indexOf("#");
            var hash = idx != -1 ? url.substring(idx + 1) : "";

            console.log('hash=' + hash);
            if (hash) {
                var anchor = $('a[href="#' + hash + '"]').first();
                if (anchor.length > 0) {
                    anchor.parent('li').click();
                }
            }

            // According items
            $("ul.homepage_AccordianHeadings h4").click(function () {
                $(this).toggleClass('clicked');
                var currentItem = $(this).next('div');
                currentItem.slideToggle(150);

                // slide up other items
                $(".homepage_AccordianContent").not(currentItem).slideUp(150);
                $("ul.homepage_AccordianHeadings h4").not($(this)).removeClass('clicked');
            });

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

            // video tabs
            $("#tab2-nav li").click(function (e) {
                e.preventDefault();

                // active the selected tab
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                };

                // unactive other items
                $("#tab2-nav li").not($(this)).removeClass('active');

                // display corresponding tab content
                var index = $(this).index() + 1;
                var tabCount = $("#tab2-nav li").length;
                for (var i = 1; i <= tabCount; i++) {
                    if (i == index) {
                        $("#tab-" + i).show();
                    } else {
                        $("#tab-" + i).hide();
                    }
                }
            });
        });
    </script>
</asp:Content>
