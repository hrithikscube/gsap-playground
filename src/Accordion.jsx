import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
// import { list, mobileList } from "./helpers";
import { useLocation } from "react-router";

const mobileList = [
    {
        name: "ABOUT US",
        url: "/",
        dropdown: false,
        isActive: false,
        subList: [
            {
                name: "About",
                subLink: "",
                isActive: false,
            },
            {
                name: "Board Members",
                subLink: "",
                isActive: false,
            },
            {
                name: "Achievements",
                subLink: "",
                isActive: false,
            },
            {
                name: "Future Targets & Goals",
                subLink: "",
                isActive: false,
            },
            {
                name: "Facilities",
                subLink: "",
                isActive: false,
            },
        ],
    },

    {
        name: "PRODUCTS",
        url: "/",
        dropdown: false,
        isActive: false,
        subList: [
            {
                name: "Active Pharmaceutical Ingredients",
                subLink: "",
                isActive: false,
            },
            {
                name: "Intermediates",
                subLink: "",
                isActive: false,
            },
        ],
    },

    {
        name: "SUSTAINABILITY & ESG",
        url: "/",
        dropdown: true,
        isActive: false,
        subList: [
            {
                name: "IMS Policy",
                url: `https://api-virupaksha.scube.me/public/IMS_Policy.pdf`,
            },
            {
                name: "Human Rights Policy",
                url: "https://api-virupaksha.scube.me/public/anti_money_laundering_policy.pdf",
            },
            {
                name: "Anti-Money Laundering Policy",
                url: "https://api-virupaksha.scube.me/public/human_rights_policy.pdf",
            },
            {
                name: "Responsible Marketing Policy",
                url: "https://api-virupaksha.scube.me/public/responsible_ marketing_policy.pdf",
            },
            {
                name: "Sustainable Procurement Policy",
                url: "https://api-virupaksha.scube.me/public/sustainable_procurement_policy.pdf",
            },
            {
                name: "CSR Policy",
                url: "https://api-virupaksha.scube.me/public/CSR_Policy.pdf",
            },
            {
                name: "CSR Annual Report",
                url: "https://api-virupaksha.scube.me/public/CSR_Annual_report.pdf",
            },
            {
                name: "Whistle Blower Policy",
                url: "https://api-virupaksha.scube.me/public/whistle_blower_policy.pdf",
            },
            {
                name: "Customer Safety Policy",
                url: "https://api-virupaksha.scube.me/public/Customer_Safety_Policy.pdf",
            },
            {
                name: "Bio Diversity Policy",
                url: "https://api-virupaksha.scube.me/public/Biodiversity_Policy.pdf",
            },
            {
                name: "Conflict Minerals Policy",
                url: "https://api-virupaksha.scube.me/public/Conflict_Minerals_Policy.pdf",
            },
            {
                name: "Water & Energy Conservation Policy",
                url: "https://api-virupaksha.scube.me/public/Water_Energy_Conservation_Policy.pdf",
            },
            {
                name: "Supplier Diversity Policy",
                url: "https://api-virupaksha.scube.me/public/Supplier_Diversity_Policy.pdf",
            },
            {
                name: "Fair Competition Policy",
                url: "https://api-virupaksha.scube.me/public/Fair_competition_Policy.pdf",
            },
        ],
    },
];

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, styleProps }) => ({
    boxShadow: "none",
    "& .MuiAccordionSummary-root": {
        minHeight: 64,
        backgroundColor: styleProps.expanded ? "#1B3F67" : "#1B3F67",
        borderRadius: styleProps.expanded ? "0px" : "0px",
        color: "#FFFFFF",

        "&.Mui-expanded": {
            marginBottom: 0,
            outline: "none",
            color: "#FFFFFF",
        },
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={
            <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#FFFFFF" }} />
        }
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: "#1B3F67",
    //   borderRadius: 9,
    minHeight: 64,
    padding: 0,
    border: "none",
    "& .MuiAccordionSummary-expandIconWrapper": {
        marginRight: theme.spacing(4),
        transform: "rotate(90deg)", // Add margin to the right of the expand icon
        // backgroundColor: '#f6f6f6'
    },
    "& .MuiAccordionSummary-content": {
        margin: theme.spacing(2),
    },
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(270deg)",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "-1px",
    backgroundColor: "#1B3F67",
}));

export default function CustomAccordion() {
    const [expanded, setExpanded] = React.useState(-1);
    const [menus, setMenus] = React.useState(mobileList);
    let { pathname } = useLocation();

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="text-white">
            <div className="flex flex-col px-1 text-white">
                {" "}
                <p
                    className={`${(pathname.includes("/") ? pathname.split("/")[1] : pathname) ===
                        "contact-us"
                        ? "text-oliveGreen"
                        : " text-darkGray"
                        } cursor-pointer py-4 pl-3 font-outFitRegular text-[16px] font-[500]`}
                >
                    HOME
                </p>
            </div>
            {menus?.map((item, parentIndex) => (
                <Accordion
                    sx={{
                        "&:before": {
                            backgroundColor: "transparent !important",
                        },
                    }}
                    key={parentIndex}
                    styleProps={{ expanded: expanded === parentIndex }}
                    expanded={expanded === parentIndex}
                    onChange={handleChange(parentIndex)}
                >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>
                            <p
                                className={`${(pathname.includes("/")
                                    ? pathname.split("/")[1]
                                    : pathname) === item?.name.toLowerCase()
                                    ? " font-[700] text-oliveGreen"
                                    : "font-outFitRegular text-[16px] font-[700] text-darkGray"
                                    } cursor-pointer font-[500]`}
                            >
                                {item?.name}
                            </p>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex flex-col max-h-52 overflow-y-auto">
                            {item?.subList?.map((subList, index) => (
                                <>
                                    {parentIndex === 2 ? (
                                        <a
                                            href={subList?.url}
                                            target="_blank"
                                            className="text-white py-1"
                                        >
                                            {subList?.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={index}
                                            to={`/${item?.name.toLocaleLowerCase()}/${subList?.slug}`}
                                            className=" font-outFitRegular text-sm font-[500] text-white"
                                        >
                                            <p
                                                className={
                                                    (pathname.includes("/")
                                                        ? pathname.split("/")[2]
                                                        : pathname) === subList?.slug?.toLowerCase()
                                                        ? "mb-3  transform cursor-pointer text-sm uppercase text-oliveGreen duration-1000"
                                                        : "darkGray mb-1 cursor-pointer text-sm uppercase"
                                                }
                                            >
                                                {subList?.name}
                                            </p>
                                        </Link>
                                    )}
                                </>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}

            <div className="flex flex-col px-1">
                <hr className="text-gray" />
                {" "}
                <p
                    className={`${(pathname.includes("/") ? pathname.split("/")[1] : pathname) ===
                        "contact-us"
                        ? "text-oliveGreen"
                        : " text-darkGray"
                        } cursor-pointer py-4 pl-3 font-outFitRegular text-[16px] font-[700]`}
                >
                    CONTACT
                </p>
            </div>
        </div>
    );
}
