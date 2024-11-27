# Buttons

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

```jsx
<Stack flexDirection="row" gap="1" flexWrap="wrap">
  <Button>Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="danger">Danger</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="info">Info</Button>
  <Button variant="light">Light</Button>
  <Button variant="dark">Dark</Button>
  <Button as="a" variant="link">
    Link
  </Button>
</Stack>
```

## Variant {#variant}

## outline

## size

## noTextWrap

## disabled

## type

## isLoading

### loadingText

### loadingSpinner

### spinnerPlacement

## Button icon

### startIcon

### endIcon

### iconSpacing

## Click effect {#click-effect}

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

```jsx
<Stack flexDirection="row" gap="1" flexWrap="wrap">
  <Button variant="primary" clickEffect="ripple">
    Ripple
  </Button>
  <Button variant="warning" clickEffect="puff">
    Puff
  </Button>
  <Button variant="secondary" clickEffect="slide">
    Slide
  </Button>
  <Button variant="success" clickEffect="stripe">
    Stripe
  </Button>
  <Button variant="light" clickEffect="slide">
    Slide
  </Button>
  <Button variant="primary" outline clickEffect="ripple">
    Ripple
  </Button>
  <Button variant="success" outline clickEffect="puff">
    Puff
  </Button>
  <Button variant="dark" outline clickEffect="slide">
    Slide
  </Button>
  <Button variant="warning" outline clickEffect="stripe">
    Stripe
  </Button>
</Stack>
```
