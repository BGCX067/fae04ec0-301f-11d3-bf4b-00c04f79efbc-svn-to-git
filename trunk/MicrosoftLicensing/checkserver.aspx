<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="checkserver.aspx.cs" Inherits="Licensing.checkserver" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <%=Environment.OSVersion %><br/>
        <%=Environment.Version %><br/>
        <%=Environment.CurrentDirectory %>
    </div>
    </form>
</body>
</html>
