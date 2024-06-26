import { IconProps } from "./IconProps.types";

export default function FaceBook({ className, size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2_75)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.625 11.375C23.625 5.09336 18.3357 0 11.8125 0C5.28926 0 0 5.09336 0 11.375C0 17.0523 4.31895 21.7582 9.9668 22.6124V14.6641H6.96674V11.375H9.9668V8.86895C9.9668 6.01859 11.7308 4.44285 14.4287 4.44285C15.7212 4.44285 17.0733 4.66527 17.0733 4.66527V7.46484H15.583C14.1165 7.46484 13.6577 8.34133 13.6577 9.24219V11.375H16.9335L16.4104 14.6641H13.6582V22.6134C19.3061 21.7598 23.625 17.0539 23.625 11.375Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_75">
          <rect width="24" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
