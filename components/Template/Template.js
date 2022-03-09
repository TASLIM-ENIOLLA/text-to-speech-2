import React, {
    useState,
    useRef
} from 'react'

import {
    Overview,
    Help,
    Settings,
    Notification
} from '../../styles/svg/SVGIcons'

export default function Template({children, domain}){
    let [profileDropDown, set_profileDropDown] = useState(false)
    let dropDownEle = useRef(null)

    const SideBar = ({children}) => {
        const arr = ["", "/"]

        return (
            <div className = "h-100 border-right col-d-none col-md-d-flex-v min-width-250px overflow-y-auto">
                <div className = "flex-1 px-0 py-5 side-bar-list">
                    {
                        children.map(
                            (each, index) => (
                                <div key = {index} className = {"transit" + (
                                    (
                                        (arr.includes(domain)) && (arr.includes(each.props.href))
                                    )
                                    ? " active"
                                    : (
                                        ((!arr.includes(domain)) && new RegExp(domain + "\(/\)?$").test(each.props.href))
                                        ? " active"
                                        : ""
                                    )
                                )}>
                                    {each}
                                </div>
                            )
                        )
                    }
                </div>
                <div className = "px-3 py-4 text-c">
                    <p className = "my-1">powered by</p>
                    <img src = "/vercel.svg" height = "10" />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className = "vh100 vw100 bg-white flex-v">
                <div className = "border-bottom">
                    <div className = "container-fluid">
                        <div className = "py-2 px-3">
                            <div className = "py-2 flex-h j-c-space-between a-i-c">
                                <div className = "flex-h a-i-c">
                                    <div className = "col-d-block col-md-d-none">
                                        <span className = "fa fa-navicon cursor-pointer fa-2x text-dark ml-2 mr-4"></span>
                                    </div>
                                    <div>
                                        <a href = "/" className = "outline-0">
                                            <img src = "/vercel.svg" height = "20" />
                                        </a>
                                    </div>
                                </div>
                                <div onClick = {
                                    (e) => {
                                        set_profileDropDown(!profileDropDown)
                                        dropDownEle.current.focus()
                                    }
                                } className = "user-select-0 po-rel flex-h a-i-c cursor-pointer text-muted">
                                    <div className = "mx-2 text-capitalize">taslim</div>
                                    <span className = {"fa transit fa-caret-" + (
                                        (profileDropDown)
                                        ? "up"
                                        : "down"
                                    )}></span>
                                    <div style = {{
                                        height: "40px",
                                        minWidth: "40px",
                                        maxWidth: "40px"
                                    }} className = "shadow-sm border mx-2 rounded-circle"></div>
                                    <div ref = {dropDownEle} tabIndex = "1" className = {"p-3 text-white rounded-half po-abs top-100pcent mt-3 outline- right-0 bg-secondary" + (
                                        (profileDropDown)
                                        ? " animated fadeIn"
                                        : " d-none"
                                    )} style = {{
                                        width: "180px",
                                        zIndex: "1000"
                                    }}>
                                        <div className = "pb-2">
                                            <a href = "/profile/" className = "py-2 text-capitalize d-inline-block">your profile</a>
                                        </div>
                                        <div className = "pb-2">
                                            <a href = "/settings/" className = "py-2 text-capitalize d-inline-block">settings</a>
                                        </div>
                                        <div className = "pb-2">
                                            <a href = "/logout/" className = "py-2 text-capitalize d-inline-block">logout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "flex-1 flex-h overflow-y-auto">
                    <SideBar>
                        <a href = "/">
                            <Overview />
                            <span className = "px-1">home</span>
                        </a>
                        <a href = "/audience/">
                            <Notification fill = "#FF0000" />
                            <span className = "px-1">audience</span>
                        </a>
                        <a href = "/settings/">
                            <Settings />
                            <span className = "px-1">settings</span>
                        </a>
                        <a href = "/about/">
                            <Help />
                            <span className = "px-1">about</span>
                        </a>
                    </SideBar>
                    <div className = "flex-1 flex-v h-100 p-4">
                        <div>
                            <h3 className = "text-capitalize py-2">{(
                                (domain === "/")
                                ? "home"
                                : domain
                            )}</h3>
                        </div>
                        <div className = "flex-1 overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
