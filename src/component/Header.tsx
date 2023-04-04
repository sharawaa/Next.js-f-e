export default function Header(): JSX.Element {
  return (
    <>
      <div className="container aHeader">
        <section>logo</section>
        <section>
          <input className="aSearchInput" type="text" />
          <button className="aSearchButton">Search</button>
        </section>

        <div
          className="modal fade"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content CloseModal container ">
              <section>
                <p className="trust">
                  Та системээс гарахдаа итгэлтэй байна уу?
                </p>
              </section>
              <section className="closeButtonAH">
                <button className="yes">Тийм</button>
                <button className="no" data-bs-dismiss="modal">
                  Үгүй
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
