import React from "react";
import { 
    Modal,
    Box,
    Button,
    Typography
  } from "@mui/material";
  import ClearIcon from '@mui/icons-material/Clear';

  const Privacy = ( { open, handleClose } ) => {
    return (
        <Modal 
            open={open}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
        }}>
            <Box sx={{
                width: {xs: "80%", md: "50%"},
                height: {xs: "80%", md: "90%"},
                padding: "2rem",
                alignItems: "center",
                display: "flex",
                bgcolor: "light",
                borderRadius: "5px",
                flexDirection: "column"
            }}>
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    paddingBottom: "1rem"
                }}>
                    <Typography variant="h2" sx={{
                        width: "80%",
                        margin: "0 3rem"
                    }}>
                        Privacy Policy
                    </Typography>
                    <Button onClick={handleClose} sx={{
                        width: "20%",
                        color: "black"
                    }}>
                        <ClearIcon></ClearIcon>
                    </Button>
                </Box>
                <Box sx={{
                    width: "100%",
                    overflow: "auto",
                    "::-webkit-scrollbar": {
                        display: "none"
                    }
                }}>
                    <Typography variant="h3">
                        Privacy Policy for jasper-portfolio
                    </Typography>
                    <Typography variant="p">
                        At jasper-portfolio, accessible from www.jasper-portfolio.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by jasper-portfolio and how we use it.
                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. Our Privacy Policy was generated with the help of GDPR Privacy Policy Generator
                    </Typography>

                    <Typography variant="h3">
                        General Data Protection Regulation (GDPR)
                    </Typography>
                    
                    <Typography variant="p">
                        We are a Data Controller of your information.

                        jasper-portfolio legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:

                        jasper-portfolio needs to perform a contract with you
                        You have given jasper-portfolio permission to do so
                        Processing your personal information is in jasper-portfolio legitimate interests
                        jasper-portfolio needs to comply with the law
                        jasper-portfolio will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.

                        If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.

                        In certain circumstances, you have the following data protection rights:

                        The right to access, update or to delete the information we have on you.
                        The right of rectification.
                        The right to object.
                        The right of restriction.
                        The right to data portability
                        The right to withdraw consent
                    </Typography>
                    <Typography variant="h3">
                        Log Files
                    </Typography>
                    <Typography variant="p">
                        jasper-portfolio follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                    </Typography>

                    <Typography variant="h3">
                        Privacy Policies
                    </Typography>
                    <Typography variant="p">
                    You may consult this list to find the Privacy Policy for each of the advertising partners of jasper-portfolio.

                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on jasper-portfolio, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

                    Note that jasper-portfolio has no access to or control over these cookies that are used by third-party advertisers.

                    Third Party Privacy Policies
                    jasper-portfolio's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                    </Typography>

                    <Typography variant="h3">
                        Children's Information
                    </Typography>
                    <Typography variant="p">
                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

                    jasper-portfolio does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </Typography>
                    <Typography variant="h3">
                        Online Privacy Policy Only
                    </Typography>
                    <Typography variant="p">
                        Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in jasper-portfolio. This policy is not applicable to any information collected offline or via channels other than this website.
                    </Typography>
                    <Typography variant="h3">
                        Consent
                    </Typography>
                    <Typography variant="p">
                        By using our website, you hereby consent to our Privacy Policy and agree to its Privacy
                    </Typography>

                    <Typography variant="p">
                        . Generated using GDPR Privacy Notice
                    </Typography>
                </Box>
            </Box>
        </Modal>
    )};

  export default Privacy;