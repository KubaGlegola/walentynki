import "./style.css";
import { gsap } from "gsap";

import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

Draggable.create(".image1");
Draggable.create(".image2");
Draggable.create(".first-slide");
Draggable.create(".last-slide");
Draggable.create(".text");
