import * as React from "react";
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";
const PlanetComponent = (props: SvgProps) => (
  <Svg width={47} height={47} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="url(#b)"
        d="M23.5 46.998c12.977 0 23.498-10.52 23.498-23.499C46.998 10.521 36.478 0 23.5 0 10.521 0 0 10.521 0 23.5c0 12.977 10.521 23.498 23.5 23.498Z"
      />
      <Path
        fill="#fff"
        d="m35.864 29.215 2.204 2.454.195-1.1c-.268.526.637 1.543.35 2.024-1.005 1.687-2.019 3.176-3.252 4.31a16.62 16.62 0 0 1-5.344 3.326c-1.98.76-4.22 1.14-6.72 1.14-5.544 0-9.878-1.817-13.004-5.45-3.125-3.632-4.688-7.74-4.688-12.325 0-4.31 1.323-8.15 3.97-11.523 3.355-4.288 7.845-6.432 13.47-6.432 5.794 0 10.42 2.198 13.878 6.594 2.453 3.103 3.704 6.976 3.75 11.617H10.103c.082 3.947 1.344 7.182 3.783 9.705 2.44 2.523 5.452 3.785 9.036 3.785a14.526 14.526 0 0 0 5.044-.908 13.283 13.283 0 0 0 4.174-2.395c1.15-.995 2.392-2.602 3.725-4.822Zm0-9.15c-.582-2.33-1.432-4.194-2.548-5.59-1.117-1.395-2.591-2.52-4.423-3.373a13.572 13.572 0 0 0-5.785-1.28c-3.335 0-6.2 1.073-8.597 3.22-1.752 1.56-3.076 3.903-3.972 7.025l25.325-.002Z"
      />
      <Path
        fill="#fff"
        d="M38.068 24.823h.674c-.194 3.277 1.332 4.65 4.202 4.538v.444c-2.994-.14-4.38 1.358-4.26 4.385h-.42l-.084-9.37"
      />
      <Path
        fill="#fff"
        d="M38.492 24.821h-.672c.193 3.276-1.334 4.649-4.202 4.537v.447c2.993-.14 4.38 1.356 4.259 4.383h.418l.085-9.368"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={0}
        x2={47}
        y1={23.499}
        y2={23.499}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.1} stopColor="#3E2469" />
        <Stop offset={0.2} stopColor="#43246D" />
        <Stop offset={0.31} stopColor="#532477" />
        <Stop offset={0.41} stopColor="#662483" />
        <Stop offset={0.59} stopColor="#821F82" />
        <Stop offset={0.7} stopColor="#951B81" />
        <Stop offset={0.82} stopColor="#931D82" />
        <Stop offset={0.89} stopColor="#8E2585" />
        <Stop offset={0.94} stopColor="#84338B" />
        <Stop offset={0.95} stopColor="#82368C" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h47v47H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PlanetComponent;
