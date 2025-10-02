import { useEffect, useState } from 'react';

const Counter = () => {
    const countersData = [
        { target: 3658, label: 'Satisfied Customers', icon: 'img/counter-icon.png' },
        { target: 658, label: 'Modern Equipment', icon: 'img/counter-icon.png' },
        { target: 1500, label: 'Expert Members', icon: 'img/counter-icon.png' },
        { target: 150, label: 'Tons Of Harvest', icon: 'img/counter-icon.png' },
    ];

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // lower = faster

        const updateCount = (counter:any, target:any) => {
            const count = +counter.innerText;
            const inc = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(() => updateCount(counter, target), 30);
            } else {
                counter.innerText = target + "+";
            }
        };

        const counterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target')!;
                        updateCount(counter, target);
                    });
                    counterObserver.disconnect(); // run only once
                }
            });
        }, { threshold: 0.5 });

        counterObserver.observe(document.querySelector('.counter-section')!);

        return () => {
            counterObserver.disconnect(); // Clean up observer when component unmounts
        };
    }, []);

    return (
        <section className="counter-section">
            <div className="container">
                <div className="row text-center">
                    {countersData.map((data, index) => (
                        <div className="col-md-3 col-6 mb-4" key={index}>
                            <div className="counter-box">
                                <div className="counter-box-img">
                                    <img src={data.icon} alt="icon" />
                                </div>
                                <h2 className="counter" data-target={data.target}>{isInView ? "0" : ""}</h2>
                                <p>{data.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Counter;
