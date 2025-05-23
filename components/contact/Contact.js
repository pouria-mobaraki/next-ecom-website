import dynamic from "next/dynamic";
import Form from "./Form";
import Map from "./Map";

export default function Contact() {

const Map = dynamic(()=>
    import('./Map'),
{
    ssr:false
})

  return (
    <div>
        <section className="book_section layout_padding">
        <div className="container">
            <div className="heading_container">
                <h2>
                    ارتباط با ما
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form_container">
                       <Form/>
                    </div>
                </div>

                
                <div className="col-md-6">
                    <div className="map_container ">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
