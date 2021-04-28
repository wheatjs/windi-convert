export default {
  utility: {
    font: [
      /^(-)?(font|tracking|leading)(-)?([a-z0-9-/[\]]+)$/gm,
      'italic',
      'not-italic',
      'antialiased',
      'subpixel-antialiased',
      'normal-nums',
      'ordinal',
      'slashed-zero',
      'lining-nums',
      'oldstyle-nums',
      'proportional-nums',
      'tabular-nums',
      'diagonal-fractions',
      'stacked-fractions',
      'thin',
    ],
    text: [
      /^(-)?(text|align|whitespace|break|placeholder)(-)?([a-z0-9-/[\]]+)$/gm,
      'underline',
      'no-underline',
      'line-through',
      'uppercase',
      'lowercase',
      'capitalize',
      'normal-case',
      'truncate',
      'overflow-ellipsis',
      'overflow-clip',
    ],
    display: [
      'inline', 
      'flow-root', 
      'contents', 
      'list-item', 
      'hidden', 
      'block', 
      'inline-block',
      'visible',
      'invisible',
    ],
    position: [
      'static', 
      'fixed',
      'absolute', 
      'relative', 
      'sticky',
      /^(-)?(inset|top|bottom|left|right|float|clear)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    list: [
      /^(-)?(list)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    bg: [
      /^(-)?(bg)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    gradient: [
      /^(-)?(from|to|via)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    border: [
      /^border(?!collapse|seperate)([a-z0-9-[\]]+)?$/gm,
      /rounded?(-)?([a-z0-9-/[\]]+)$/gm,
    ],
    divide: [
      /divide-([a-z0-9-/[\]]+)$/gm,
    ],
    ring: [
      /ring?(-)?([a-z0-9-/[\]]+)$/gm,
    ],
    svg: [
      /(fill|stroke)-([a-z0-9-/[\]]+)$/gm,
    ],
    p: [
      /^(-)?(p|px|py|pt|pb|pl|pr)(-)?([a-z0-9-/[\]]+)$/gm,
    ],
    m: [
      /^(-)?(m|mx|my|mt|mb|ml|mr)(-)?([a-z0-9-/[\]]+)$/gm,
    ],
    space: [
      /^(-)?(space)(-)?([a-z0-9-/[\]]+)$/gm,
    ],
    w: [
      /^(-)?(w-)([a-z0-9-/[\]]+)$/gm
    ],
    'min-w': [
      /^(-)?(min-w)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    'max-w': [
      /^(-)?(max-w)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    h: [
      /^(-)?(h-)([a-z0-9-/[\]]+)$/gm
    ],
    'min-h': [
      /^(-)?(min-h)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    'max-h': [
      /^(-)?(max-h)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    flex: [
      /^(-)?(flex)(-)?([a-z0-9-/[\]]+)$/gm,
    ],
    grid: [
      /^(-)?(col|grid|auto-cols|auto-rows|gap)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    table: [
      'border-collapse',
      'border-separate',
      /^(-)?(table)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    order: [
      /^(-)?(order)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    align: [
      /^(-)?(content|items|self)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    justify: [
      /^(-)?(justify)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    place: [
      /^(-)?(place)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    box: [
      'box-border',
      'box-content',
      'decoration-slice',
      'decoration-clone',
    ],
    isolation: [
      'isolate',
      'isolate-auto',
    ],
    object: [
      /^(-)?(object)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    overscroll: [
      /^(-)?(overscroll)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    z: [
      /^(-)?(z)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    shadow: [
      /^(-)?(shadow)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    opacity: [
      /^(-)?(opacity)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    blend: [
      /^(-)?(mix-blend)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    filter: [
      /^(-)?(blur|brightness|drop-shadow|grayscale|hue-rotate|invert|saturate|sepia)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    backdrop: [
      /^(-)?(backdrop)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    transition: [
      /^(-)?(transition|duration|delay|ease)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    animate: [
      /^(-)?(animate)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    transform: [
      /^(-)?(origin|scale|rotate|translate|skew)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    appearance: [
      'appearance-none'
    ],
    cursor: [
      /^(-)?(cursor)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    outline: [
      /^(-)?(outline)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    resize: [
      /^(-)?(resize)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    select: [
      /^(-)?(select)(-)?([a-z0-9-/[\]]+)$/gm
    ],
    sr: [
      'sr-only',
      'not-sr-only'
    ]
  },
}