import React, { useState, useEffect } from "react";
import Image from "next/image";
import * as styles from "./Contact.module.css";
import Wrapper from "../layout/Wrapper";
import Underline from "../Underline";
import Region from "../layout/Region";
import { sendContactForm } from "../../lib/api";
import hamster from "@/public/img/hamster.png";
import Title from "../Title";
import Loader from "../Loader";
import AnimationContainer from "../animation-container/AnimationContainer";
import useLoading from "@/hooks/useLoading";

const Contact = (props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [contactFormData, setContactFormData] = useState({});
  const [contactFormProccess, setContactFormProccess] = useState({
    success: false,
    error: false,
    loading: false,
  });
  const [loadingHandler, isLoading] = useLoading();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setContactFormProccess((prev) => ({ ...prev, loading: true }));
    try {
      await sendContactForm(contactFormData);
      setContactFormProccess((prev) => ({
        ...prev,
        success: true,
        loading: false,
      }));
    } catch (err) {
      console.log(err);
      setContactFormProccess((prev) => ({
        ...prev,
        error: true,
        loading: false,
      }));
    }
  };

  const inputHandler = (e) => {
    e.target.name === "email"
      ? setContactFormData({ ...contactFormData, email: e.target.value })
      : setContactFormData({
          ...contactFormData,
          message: e.target.value,
        });

    switch (e.target.name) {
      case "email":
        setContactFormData({ ...contactFormData, email: e.target.value });
        break;
      case "message":
        setContactFormData({ ...contactFormData, message: e.target.value });
        break;
      case "tel":
        setContactFormData({ ...contactFormData, tel: e.target.value });
        break;
    }
  };

  return (
    <div id="contact" className={styles.contactBackground}>
      {props.shapedivider ? (
        <div className={styles.shapedivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      ) : (
        ""
      )}
      <Region>
        <Wrapper>
          {props.title ? (
            <Title>
              <div className={styles.title}>
                <h2 className="section-title">Pronadji nas.</h2>
                <Underline position={"start"} color={"secondary"}></Underline>
              </div>
            </Title>
          ) : (
            ""
          )}
          <div className={styles.switcher}>
            <div className={styles.light}>
              <AnimationContainer>
                <div className={styles.animalGrid}>
                  <div className={styles.blob}>
                    <div className={styles.shape} />
                  </div>
                  <Image
                    src={hamster}
                    alt="hrcak"
                    width={450}
                    height={250}
                    className={`faded ${!isLoading ? "fadeIn" : ""}`}
                    onLoad={loadingHandler}
                  ></Image>
                </div>
              </AnimationContainer>
            </div>

            <div className={styles.contactStack}>
              {/* <div className={styles.center}> */}
              <div className={styles.contactInfo}>
                <ul className={styles.contactInfoStack}>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#172189"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z" />
                    </svg>
                    Tel: <a href="tel:064/117 84 43">064/117 84 43</a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#172189"
                    >
                      <path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" />
                    </svg>
                    Mail:{" "}
                    <a href="mailto:sasa.kosijer@hotmail.com">
                      sasa.kosijer@hotmail.com
                    </a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#172189"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
                    </svg>

                    <a
                      href="https://www.instagram.com/_vet4pets_/"
                      rel="noreferer"
                      target="_blank"
                    >
                      vet4Pets instagram
                    </a>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="#172189"
                    >
                      <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    Adresa:&nbsp;
                    <a
                      href="https://goo.gl/maps/svr11GUbX67fyoUL7"
                      target="blank"
                    >
                      Branka Cvetkovića br.6, Žarkovo
                    </a>
                  </li>
                </ul>
              </div>
              <form onSubmit={onSubmitHandler} className={styles.contactStack}>
                <h3>Javi se!</h3>
                {!contactFormProccess.success && contactFormProccess.error ? (
                  <p className={styles.error}>
                    Došlo je do greške. Poruka nije poslata.
                  </p>
                ) : !contactFormProccess.success &&
                  !contactFormProccess.error ? (
                  ""
                ) : (
                  <p className={styles.success}>
                    Hvala na poruci! Javljamo se!
                  </p>
                )}
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoCapitalize="none"
                    autoCorrect="off"
                    required
                    pattern="[^@]+@[^\.]+\..+"
                    onChange={inputHandler}
                  />
                  <label className={styles.borderTitle} htmlFor="email">
                    Tvoj Mail
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="tel"
                    id="tel"
                    autoCapitalize="none"
                    autoCorrect="off"
                    pattern="[0-9]+"
                    onChange={inputHandler}
                  />
                  <label className={styles.borderTitle} htmlFor="tel">
                    Tvoj Telefon (opciono)
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <textarea
                    name="message"
                    id="message"
                    type="text"
                    rows="4"
                    required
                    autoCorrect="off"
                    onChange={inputHandler}
                  />
                  <label className={styles.borderTitle} htmlFor="message">
                    Poruka
                  </label>
                </div>
                <div className={styles.buttonAndLoader}>
                  <button className="button">Pošalji</button>
                  {contactFormProccess.loading ? <Loader></Loader> : ""}
                </div>
              </form>
            </div>
          </div>
          {/* </div> */}
        </Wrapper>
      </Region>
    </div>
  );
};

export default Contact;
