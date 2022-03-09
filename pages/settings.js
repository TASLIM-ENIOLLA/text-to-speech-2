import React, {useState} from 'react'
import Template from '../components/Template/Template'

export default function Settings(){
    let [speechSettings, set_speechSettings] = useState({
        rate: 0,
        pitch: 1,
        volume: 50
    })

    return (
        <Template domain = "settings">
            <div className = "h-100 w-100 overflow-y-auto py-3">
                <div className = "rounded-1x border shadow-sm p-3 mb-4">
                    <div className = "text-capitalize mb-4">speech settings</div>
                    <div className = "col-md-7 p-0">
                        <div className = "mb-3">
                            <small className = "text-capitalize">volume</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                        <div className = "mb-3">
                            <small className = "text-capitalize">Rate</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                        <div className = "mb-3">
                            <small className = "text-capitalize">Pitch</small>
                            <div>
                                <input min = "0" max = "2" value = {speechSettings.pitch} type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "rounded-1x border shadow-sm p-3 mb-4">
                    <div className = "text-capitalize mb-4">speech settings</div>
                    <div className = "col-md-7 p-0">
                        <div className = "mb-3">
                            <small className = "text-capitalize">volume</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                        <div className = "mb-3">
                            <small className = "text-capitalize">Rate</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                        <div className = "mb-3">
                            <small className = "text-capitalize">Pitch</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "rounded-1x border shadow-sm p-3 mb-4">
                    <div className = "text-capitalize mb-4">speech settings</div>
                    <div className = "col-md-7 p-0">
                        <div className = "mb-3">
                            <small className = "text-capitalize">volume</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                        <div className = "mb-3">
                            <small className = "text-capitalize">Rate</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                        <div className = "mb-3">
                            <small className = "text-capitalize">Pitch</small>
                            <div>
                                <input min = "1" max = "100" type = "range" className = "outline-0 d-block w-100 my-3" style = {{
                                    height: "3px"
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
