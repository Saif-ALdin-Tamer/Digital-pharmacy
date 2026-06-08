import React from 'react';
import { FaBox, FaMoneyBillWave, FaClipboardCheck, FaClipboardList, FaSearchDollar, FaTruck } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategoryIcon from '../../components/CategoryIcon/CategoryIcon';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import { categories, features, services, steps } from '../../data/mockData';
import './Home.css';

const serviceIconMap = {
  bundled: FaBox,
  financial: FaMoneyBillWave,
  'hassle-free': FaClipboardCheck,
};

const stepIcons = [FaClipboardList, FaSearchDollar, FaTruck];

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      <section className="hero-section">
        <div className="hero-section__inner">
          <div className="hero-title">
            <h1>
              The <span className="teal">one-stop</span> digital market place
              <span className="line-2">for all your pharmacy's needs</span>
            </h1>
          </div>

          <div className="categories-heading">
            <h2>Shop By Category</h2>
          </div>

          <div className="categories-row">
            {categories.map((cat) => (
              <CategoryIcon key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-row">
          {features.map((feat) => (
            <FeatureCard key={feat.id} feature={feat} />
          ))}
        </div>
      </section>

      <section className="preferred-section">
        <div className="preferred-section__inner">
          <h2>
            The Preferred Platform for{' '}
            <span className="highlight">Your Pharmacy's Orders</span>{' '}
            <span className="country">in Egypt.</span>
          </h2>
        </div>
      </section>

      <section className="services-section">
        <div className="services-section__inner">
          <div className="services-row">
            {services.map((service) => {
              const IconComponent = serviceIconMap[service.icon] || FaBox;
              return (
                <div className="service-item" key={service.id}>
                  <div className="service-icon-box">
                    <IconComponent />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="steps-section__inner">
          <div className="steps-content">
            <h2>LIST, COMPARE<br />AND ORDER</h2>

            {steps.map((step, index) => {
              const StepIcon = stepIcons[index] || FaClipboardList;
              return (
                <div className="step-item" key={step.id}>
                  <div className="step-icon-circle">
                    <StepIcon />
                  </div>
                  <div className="step-text">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="steps-phone">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-screen__header">Digital Pharmacy</div>
                <div className="phone-screen__search" />
                <div className="phone-screen__cards">
                  <div className="phone-card">
                    <div className="phone-card__img">💊</div>
                    <div className="phone-card__info">
                      <div className="phone-card__title">Amoxicillin 500mg</div>
                      <div className="phone-card__price">EGP 45.00</div>
                    </div>
                    <div className="phone-card__btn">+</div>
                  </div>
                  <div className="phone-card">
                    <div className="phone-card__img">🩹</div>
                    <div className="phone-card__info">
                      <div className="phone-card__title">Paracetamol 200mg</div>
                      <div className="phone-card__price">EGP 22.50</div>
                    </div>
                    <div className="phone-card__btn">+</div>
                  </div>
                  <div className="phone-card">
                    <div className="phone-card__img">💉</div>
                    <div className="phone-card__info">
                      <div className="phone-card__title">Vitamin C 1000mg</div>
                      <div className="phone-card__price">EGP 38.00</div>
                    </div>
                    <div className="phone-card__btn">+</div>
                  </div>
                  <div className="phone-card">
                    <div className="phone-card__img">🧴</div>
                    <div className="phone-card__info">
                      <div className="phone-card__title">Skin Care Cream</div>
                      <div className="phone-card__price">EGP 65.00</div>
                    </div>
                    <div className="phone-card__btn">+</div>
                  </div>
                </div>
                <div className="phone-screen__nav">
                  <div className="phone-nav-dot phone-nav-dot--active" />
                  <div className="phone-nav-dot" />
                  <div className="phone-nav-dot" />
                  <div className="phone-nav-dot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
