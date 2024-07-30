import PropTypes from 'prop-types'
const Eigenvalue = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={74.632}
    height={15.944}
    aria-hidden='true'
    viewBox='0 -868 4123.6 881'
    {...props}
  >
    <defs>
      <path
        id='a-eigenvalue'
        d='M65 0Q45 0 45 18q3 34 16 42 4 2 20 2 74 0 84 12 1 0 100 154t200 311 104 160q7 8 14 10t28 2 26-1 12-10q1-3 46-320l46-317 43-1h43q12-12 12-17l-4-16q-4-20-8-24t-21-5h-16q-13 0-47 1t-86 1q-72 0-110-1t-43-1q-23 0-23 17 3 37 16 43 4 2 44 2 39 0 39 1 0 5-7 58t-9 58v2H308l-37-57q-35-55-35-57t47-5h4q29 0 29-16 0-20-9-38-5-5-12-8l-33 1q-20 1-94 1-49 0-75-1T65 0Zm472 372q-4 30-9 63t-7 51-3 18v1q-1 0-85-130l-85-131 103-1q104 0 104 1l-18 128Z'
      />
      <path
        id='b-eigenvalue'
        d='M380 367q0 30 26 58t59 28q28 0 51-23t24-73q0-43-16-107t-57-135-94-102Q338-8 292-8q-74 0-125 31t-51 106q0 49 36 146t37 113q0 8-2 10t-11 3q-28-3-51-29t-36-68q-5-16-8-19t-20-3H44q-20 0-20 14 0 10 10 34t30 52 52 49 73 21q42 0 80-23t39-67q0-16-35-107t-35-141q0-71 68-71 30 0 57 22t44 53 30 64 19 57 6 29q0 22-45 47-37 20-37 52Z'
      />
      <path
        id='c-eigenvalue'
        d='M406 694q0 10 7 19t20 10q15 0 21-4t13-18q16-36 55-53 20-11 20-29 0-14-6-20t-22-13q-46-17-83-54-20-19-32-19-13 0-21 9t-9 21q0 14 12 25l6 6 13 14H228l-172 1q-23 9-23 29 0 18 23 31h370q-20 27-20 45Z'
      />
      <path
        id='d-eigenvalue'
        d='M87 333q-23 10-23 29 0 21 20 29 5 2 364 2h359q1-1 4-3t6-4 6-5 4-7 2-11q0-18-22-30H87Zm0-224q-23 9-23 30 0 20 22 29 3 1 362 1h359l5-3q4-3 6-4t5-5 4-8 2-10q0-21-22-30H87Z'
      />
      <path
        id='e-eigenvalue'
        d='M95-13Q70-13 55 4T40 41q0 24 21 47 4 4 149 119t147 115L235 602q-18 38-50 41-3 0-7 1t-5 1q-12 6-12 21 0 11 6 18t14 8q8 2 31 2 123 0 146-34 4-7 142-320T647 18q5-8 5-12 0-14-30-14h-84l-12 3q-20 6-26 13-6 8-56 120l-4 10-53 121-122-125Q156 20 137 4T95-13Z'
      />
    </defs>
    <g stroke='#000' strokeWidth={0} data-mml-node='math'>
      <use
        xlinkHref='#a-eigenvalue'
        data-c='1D468'
        data-mml-node='mi'
        transform='scale(1 -1)'
      />
      <g data-mjx-texclass='ORD' data-mml-node='TeXAtom'>
        <g data-mml-node='mover'>
          <use
            xlinkHref='#b-eigenvalue'
            data-c='1D497'
            data-mml-node='mi'
            transform='matrix(1 0 0 -1 869 0)'
          />
          <use
            xlinkHref='#c-eigenvalue'
            data-c='20D7'
            data-mml-node='mo'
            transform='matrix(1 0 0 -1 896.9 -45)'
          />
        </g>
      </g>
      <use
        xlinkHref='#d-eigenvalue'
        data-c='3D'
        data-mml-node='mo'
        transform='matrix(1 0 0 -1 1713.8 0)'
      />
      <use
        xlinkHref='#e-eigenvalue'
        data-c='1D740'
        data-mml-node='mi'
        transform='matrix(1 0 0 -1 2885.6 0)'
      />
      <g data-mjx-texclass='ORD' data-mml-node='TeXAtom'>
        <g data-mml-node='mover'>
          <use
            xlinkHref='#b-eigenvalue'
            data-c='1D497'
            data-mml-node='mi'
            transform='matrix(1 0 0 -1 3556.6 0)'
          />
          <use
            xlinkHref='#c-eigenvalue'
            data-c='20D7'
            data-mml-node='mo'
            transform='matrix(1 0 0 -1 3584.5 -45)'
          />
        </g>
      </g>
    </g>
  </svg>
)
export default Eigenvalue

Eigenvalue.propTypes = {
  props: PropTypes.string
}
