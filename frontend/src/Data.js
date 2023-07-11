const HomeData = [
  {
    id: 1,
    image:
      "https://www.91-cdn.com/hub/wp-content/uploads/2023/02/Tiago_EV-FI.jpg",
    heading: "Tata Tiago EV",
    text: "The Tata Tiago EV is an affordable and efficient electric hatchback. It offers a range of 250-315 km on a single charge and can accelerate from 0 to 60 km/h in 5.7 seconds.",
    release_year: 2023,
    price: 869000,
  },

  {
    id: 2,
    image:
      "https://imgd.aeplcdn.com/0x0/n/cw/ec/110289/ioniq-exterior-right-front-three-quarter-2.jpeg?isig=0",
    heading: "Hyundai Ioniq 5",
    text: "The Hyundai Ioniq 5 is a stylish and practical electric SUV. It offers a range of up to 303 miles on a single charge and can be charged from 10% to 80% in just 18 minutes.",
    release_year: 2023,
    price: 4595000,
  },
  {
    id: 3,
    image: "https://www.cartoq.com/wp-content/uploads/2022/05/kia-ev-6-1-1.jpg",
    heading: "Kia EV6",
    text: "The Kia EV6 is another great option for an electric SUV. It offers a range of up to 310 miles on a single charge and can be charged from 10% to 80% in just 18 minutes.",
    release_year: 2023,
    price: 6095000,
  },

  {
    id: 4,
    image:
      "https://bd.gaadicdn.com/processedimages/tvs/iqube-electric/source/iqube-electric6284cef6e6189.jpg",
    heading: "TVS iQube",
    text: "The TVS iQube is a stylish and practical electric scooter. It offers a range of up to 75 kilometers on a single charge and can be charged from 0 to 80% in just 4.5 hours.",
    release_year: 2023,
    price: 6095000,
  },
  {
    id: 5,
    image: "https://etimg.etb2bimg.com/photo/92983115.cms",
    heading: "Ather 450X",
    text: "The Ather 450X is another great option for an electric scooter. It offers a range of up to 116 kilometers on a single charge and can accelerate from 0 to 40 kilometers per hour in just 3.3 seconds.",
    release_year: 2023,
    price: 157307,
  },

  {
    id: 6,
    image:
      "https://www.team-bhp.com/forum/attachments/electric-cars/2318755d1654793365-volkswagen-id-4-ev-india-launch-confirmed-2023-20220609_221841.jpg",
    heading: "Volkswagen ID.4:",
    text: "he Volkswagen ID.4 is a comfortable and spacious electric SUV. It offers a range of up to 250 miles on a single charge and can be charged from 10% to 80% in just 38 minutes.",
    release_year: 2023,
    price: 6095000,
  },
];
const chargingPoints = [
  {
    id: 1,
    name: "Electric Vehicle Charging Station, Sheshadripuram",
    rating: 4,
    latitude: 12.9716,
    longitude: 77.5946,
    num_of_chargers: 2,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "BESCOM",
    contact_info: "1800-103-4567",
  },
  {
    id: 2,
    name: "Electric Vehicle Charging Station, Grand Sigma Mall, Cunningham Rd",
    rating: 1,
    latitude: 12.9639,
    longitude: 77.6101,
    num_of_chargers: 4,
    type_of_chargers: ["fast", "slow"],
    open_hours: "10am-10pm",
    operator: "Charzer",
    contact_info: "1800-234-5678",
  },
  {
    id: 3,
    name: "Charzer Charging Station, K.R. Market",
    rating: 0,
    latitude: 12.9656,
    longitude: 77.6106,
    num_of_chargers: 2,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "Charzer",
    contact_info: "1800-234-5678",
  },
  {
    id: 4,
    name: "Ather Grid, Indiranagar",
    rating: 4.5,
    latitude: 12.9589,
    longitude: 77.6051,
    num_of_chargers: 6,
    type_of_chargers: ["fast", "slow"],
    open_hours: "24 hours",
    operator: "Ather Energy",
    contact_info: "1800-123-4567",
  },
  {
    id: 5,
    name: "BESCOM Charging Station, MG Road",
    rating: 3.5,
    latitude: 12.9716,
    longitude: 77.6016,
    num_of_chargers: 4,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "BESCOM",
    contact_info: "1800-103-4567",
  },
  {
    id: 6,
    name: "Charzer Charging Station, Ulsoor",
    rating: 4,
    latitude: 12.9611,
    longitude: 77.5991,
    num_of_chargers: 2,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "Charzer",
    contact_info: "1800-234-5678",
  },
  {
    name: "Electric Vehicle Charging Station, Kempegowda Maharaja Shopping Complex",
    rating: 4.5,
    latitude: 12.9681,
    longitude: 77.5956,
    num_of_chargers: 4,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "Tata Power",
    contact_info: "1800-234-5678",
  },
  {
    name: "Charzer Charging Station, Majestic Bus Station",
    rating: 3.5,
    latitude: 12.9696,
    longitude: 77.5961,
    num_of_chargers: 2,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "Charzer",
    contact_info: "1800-234-5678",
  },
  {
    name: "BESCOM Charging Station, KR Market",
    rating: 3.0,
    latitude: 12.9671,
    longitude: 77.5971,
    num_of_chargers: 2,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "BESCOM",
    contact_info: "1800-103-4567",
  },
  {
    name: "Ather Grid, Lavelle Road",
    rating: 4.0,
    latitude: 12.9661,
    longitude: 77.5991,
    num_of_chargers: 3,
    type_of_chargers: ["fast", "slow"],
    open_hours: "24 hours",
    operator: "Ather Energy",
    contact_info: "1800-123-4567",
  },
  {
    name: "Charzer Charging Station, MG Road",
    rating: 4.0,
    latitude: 12.9696,
    longitude: 77.5996,
    num_of_chargers: 2,
    type_of_chargers: ["slow", "fast"],
    open_hours: "24 hours",
    operator: "Charzer",
    contact_info: "1800-234-5678",
  },
];
const OurProductsData = [
  {
    id: 1,
    name: "Tata Tiago EV",
    brand: "XYZ",
    imageUrl:
      "https://www.91-cdn.com/hub/wp-content/uploads/2023/02/Tiago_EV-FI.jpg",
    description:
      "The Tata Tiago EV is an affordable and efficient electric hatchback. It offers a range of 250-315 km on a single charge and can accelerate from 0 to 60 km/h in 5.7 seconds.",
    price: 869000,
    release_year: 2023,
    rating: 1,
    maximum_power: 200,
  },
  {
    id: 2,
    name: "Hyundai Ioniq 5",
    brand: "XYZ",
    imageUrl:
      "https://imgd.aeplcdn.com/0x0/n/cw/ec/110289/ioniq-exterior-right-front-three-quarter-2.jpeg?isig=0",
    description:
      "The Hyundai Ioniq 5 is a stylish and practical electric SUV. It offers a range of up to 303 miles on a single charge and can be charged from 10% to 80% in just 18 minutes.",
    price: 4595000,
    release_year: 2023,
    rating: 1,
    maximum_power: 200,
  },
  {
    id: 4,
    name: "TVS iQube",
    brand: "XYZ",
    imageUrl:
      "https://bd.gaadicdn.com/processedimages/tvs/iqube-electric/source/iqube-electric6284cef6e6189.jpg",
    description:
      "The TVS iQube is a stylish and practical electric scooter. It offers a range of up to 75 kilometers on a single charge and can be charged from 0 to 80% in just 4.5 hours.",
    price: 6095000,
    release_year: 2023,
    rating: 1,
    maximum_power: 200,
  },
  {
    id: 5,
    name: "Ather 450X",
    brand: "XYZ",
    imageUrl: "https://etimg.etb2bimg.com/photo/92983115.cms",
    description:
      "The Ather 450X is another great option for an electric scooter. It offers a range of up to 116 kilometers on a single charge and can accelerate from 0 to 40 kilometers per hour in just 3.3 seconds.",
    price: 157307,
    release_year: 2023,
    rating: 1,
    maximum_power: 200,
  },
  {
    id: 6,
    name: "Kinetic Safar Smart",
    brand: "XYZ",
    imageUrl:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fi.ndtvimg.com%2Fi%2F2017-04%2Fkinetic-safar_827x510_71493469570.jpg&w=828&q=75",
    description:
      "The Kinetic Safar Smart is a stylish and affordable electric rickshaw. It offers a range of up to 130 kilometers on a single charge and can seat up to 3 passengers.",
    price: 145000,
    release_year: 2023,
    rating: 1,
    maximum_power: 200,
  },
  {
    id: 7,
    name: "Volkswagen ID.4:",
    brand: "XYZ",
    imageUrl:
      "https://www.team-bhp.com/forum/attachments/electric-cars/2318755d1654793365-volkswagen-id-4-ev-india-launch-confirmed-2023-20220609_221841.jpg",

    description:
      "he Volkswagen ID.4 is a comfortable and spacious electric SUV. It offers a range of up to 250 miles on a single charge and can be charged from 10% to 80% in just 38 minutes.",
    price: 6095000,
    release_year: 2023,
    rating: 1,
    maximum_power: 200,
  },
  {
    id: 8,
    name: "Mahindra Treo",
    brand: "XYZ",
    imageUrl:
      "https://c.ndtvimg.com/2019-11/2ld8cclo_mahindra-treo_625x300_27_November_19.jpg",

    description:
      "The Mahindra Treo is one of the most popular electric rickshaws in India. It offers a range of up to 141 kilometers on a single charge and can seat up to 4 passengers.",
    price: 295000,
    release_year: 2022,
    rating: 1,
    maximum_power: 200,
  },
];

const FeatureData = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Charging Options",
    description:
      "Highlight the different charging options available for the electric vehicle, such as home charging, public charging stations, and fast-charging capabilities.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Performance",
    description:
      "Emphasize the electric vehicle's instant torque and smooth acceleration, showcasing its high-performance capabilities",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Zero Emissions",
    description:
      "Highlight the fact that electric vehicles produce zero tailpipe emissions, promoting their environmental benefits and contribution to reducing air pollution.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Cost Savings",
    description:
      "Discuss the potential cost savings associated with owning an electric vehicle, including lower fuel costs compared to traditional gasoline vehicles and potential tax incentives or rebates.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Maintenance",
    description:
      "Mention the reduced maintenance requirements of electric vehicles, such as fewer moving parts, no oil changes, and less frequent servicing needs.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Regenerative Braking",
    description:
      "Explain the concept of regenerative braking, which allows electric vehicles to recover and store energy while braking, increasing overall efficiency.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Advanced Safety Features",
    description:
      "Highlight any advanced safety features specific to the electric vehicle model, such as collision avoidance systems, lane departure warning, or adaptive cruise control.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/co mmons/a/a1/Orocon_logo1.png",
    title: "Smart Connectivity",
    description:
      "Mention any smart connectivity features, such as integration with smartphone apps for monitoring battery status, locating charging stations, or pre-conditioning the vehicle's interior temperature.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Energy Efficiency",
    description:
      "Discuss the high energy efficiency of electric vehicles compared to internal combustion engine vehicles, showcasing how they convert a higher percentage of stored energy into propulsion.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Battery Technology",
    description:
      "Provide information about the electric vehicle's battery technology, including its capacity, durability, and any advancements that contribute to longer battery life.",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Orocon_logo1.png",
    title: "Quiet Operation",
    description:
      "Highlight the quiet operation of electric vehicles, emphasizing the reduced noise pollution compared to traditional vehicles.",
  },
];
const servicesData = [
  {
    title: "Sales",
    logo: "https://www.zarla.com/images/zarla-powersale-1x1-2400x2400-20220112-j8tgfmpx4pxghtqj68kx.png?crop=1:1,smart&width=250&dpr=2",
  },
  {
    title: "Spares",
    logo: "https://media.istockphoto.com/id/1174548417/vector/creative-illustration-car-mechanic-auto-repair-logo-vector-graphic-illustration.jpg?s=612x612&w=0&k=20&c=wlAohx-NcjHxu39FbjV-txiT1I5gekd_RBTvU2ZHOIU=",
  },
  {
    title: "Repairs",
    logo: "https://thumbs.dreamstime.com/z/car-service-repair-station-logo-garage-signs-set-isolated-sings-vehicle-workshop-auto-maintenance-center-automobile-143173721.jpg",
  },
  {
    title: "Maintenance",
    logo: "https://img.freepik.com/premium-vector/car-service-logo-design-template-with-24h-gear-automobile-repair-maintenance-assistance_108855-3439.jpg",
  },
  {
    title: "Charging stations",
    logo: "https://thumbs.dreamstime.com/b/mobile-185004089.jpg",
  },
  {
    title: "Customizations",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLo1xWOXqZ_Zsx3PE4ZbOtLPNCnbnYO9QRA&usqp=CAU",
  },
];
const successData = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
    number: "1000",
    text: "Text 1",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
    number: "2000",
    text: "Text 2",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
    number: "3000",
    text: "Text 3",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Logo1_PNG.png",
    number: "4000",
    text: "Text 4",
  },
];
const dummyIfNotLoaded = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    heading: "Carousel Heading 1",
    text: "Carousel Text 1",
  },

  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1387159339/photo/electric-vehicle-charging.webp?b=1&s=170667a&w=0&k=20&c=8d4Lxtp6AxISmXzh5L0QW8MrA7TPLMQUHJP94kQYAQY=",
    heading: "Carousel Heading 3",
    text: "Carousel Text 3",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    heading: "Carousel Heading 1",
    text: "Carousel Text 1",
  },

  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1387159339/photo/electric-vehicle-charging.webp?b=1&s=170667a&w=0&k=20&c=8d4Lxtp6AxISmXzh5L0QW8MrA7TPLMQUHJP94kQYAQY=",
    heading: "Carousel Heading 3",
    text: "Carousel Text 3",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=300&q=60",
    heading: "Carousel Heading 1",
    text: "Carousel Text 1",
  },

  {
    id: 6,
    image:
      "https://media.istockphoto.com/id/1387159339/photo/electric-vehicle-charging.webp?b=1&s=170667a&w=0&k=20&c=8d4Lxtp6AxISmXzh5L0QW8MrA7TPLMQUHJP94kQYAQY=",
    heading: "Carousel Heading 3",
    text: "Carousel Text 3",
  },
];
const ParticlesBackgroundSideConfetti = {
  autoPlay: true,
  background: {
    color: {
      value: "",
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 140,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: false,
        mode: [],
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: {
        delay: 0.5,
        enable: true,
      },
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
        mix: false,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
    },
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: false,
      maxSpeed: 50,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#ffd700",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true,
        },
      },
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0,
      },
      decay: 0.05,
      distance: {},
      direction: "top",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: true,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "destroy",
        bottom: "destroy",
        left: "destroy",
        right: "destroy",
        top: "none",
      },
      random: false,
      size: false,
      speed: {
        min: 10,
        max: 50,
      },
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {},
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: false,
        width: 1920,
        height: 1080,
      },
      limit: 0,
      value: 300,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: 1,
      animation: {
        count: 0,
        enable: false,
        speed: 2,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
      },
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: "#000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      close: true,
      fill: true,
      options: {},
      type: "triangle",
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: {
        min: 0,
        max: 2,
      },
      animation: {
        count: 1,
        enable: true,
        speed: 16,
        decay: 0,
        delay: 0,
        sync: true,
        mode: "auto",
        startValue: "min",
        destroy: "none",
      },
    },
    stroke: {
      width: 0,
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 30,
        decay: 0,
        sync: false,
      },
      direction: "random",
      path: false,
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
        particles: {},
      },
    },
    roll: {
      darken: {
        enable: true,
        value: 25,
      },
      enable: true,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: {
        min: 5,
        max: 15,
      },
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: {
        min: 0,
        max: 360,
      },
      animation: {
        enable: true,
        speed: 30,
        decay: 0,
        sync: false,
      },
      direction: "random",
      enable: true,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 30,
      enable: true,
      speed: {
        angle: {
          min: -7,
          max: 7,
        },
        move: 10,
      },
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    links: {
      blink: false,
      color: {
        value: "#fff",
      },
      consent: false,
      distance: 100,
      enable: false,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: false,
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  emitters: [
    {
      autoPlay: true,
      fill: true,
      life: {
        wait: false,
      },
      rate: {
        quantity: 5,
        delay: 0.15,
      },
      shape: "square",
      startCount: 0,
      particles: {
        move: {
          direction: "top-right",
          outModes: {
            top: "none",
            left: "none",
            default: "destroy",
          },
        },
      },
      position: {
        x: 0,
        y: 30,
      },
    },
    {
      autoPlay: true,
      fill: true,
      life: {
        wait: false,
      },
      rate: {
        quantity: 5,
        delay: 0.15,
      },
      shape: "square",
      startCount: 0,
      particles: {
        move: {
          direction: "top-left",
          outModes: {
            top: "none",
            right: "none",
            default: "destroy",
          },
        },
      },
      position: {
        x: 100,
        y: 30,
      },
    },
  ],
};
export {
  OurProductsData,
  HomeData,
  ParticlesBackgroundSideConfetti,
  chargingPoints,
  FeatureData,
  servicesData,
  successData,dummyIfNotLoaded
};
