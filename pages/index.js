import React, {useState, useEffect} from 'react'
import Template from '../components/Template/Template'

const getDailySuggestion = async () => {
    const res = await fetch("https://www.boredapi.com/api/activity")
    res = res.json()

    return res
}

export default function Index(){
    let [dailySuggestion, set_dailySuggestion] = useState([])

    useEffect(
        () => {
            let mounted = true

            if(mounted){
                getDailySuggestion().then(
                    data => {
                        set_dailySuggestion(data)
                    }
                )
            }

            return () => {
                mounted = false
            }
        }, []
    )
    return (
        <Template domain = "/">
            <div className = "h-100 w-100">
                <div className = "py-4">
                    {
                        (
                            (true)
                            ? (
                                <div className = "p-3 border rounded-1x thick-theme-border-left shadow-sm">
                                    <h5 className = "text-capitalize">{dailySuggestion.type}</h5>
                                    <div className = "text-muted">{dailySuggestion.activity}</div>
                                </div>
                            )
                            : "fgfg"
                        )
                    }
                </div>
            </div>
        </Template>
    )
}
