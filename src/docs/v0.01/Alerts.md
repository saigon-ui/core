# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages..

## Examples {#examples}

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., `.alert-success`).

```jsx
    <Alert variant="primary">
        This is a <b>primary</b> alert—check it out!
    </Alert>

    <Alert variant="secondary">
        This is a <b>secondary</b> alert—check it out!
    </Alert>

    <Alert variant="success">
        This is a <b>success</b> alert—check it out!
    </Alert>

    <Alert variant="danger">
        This is a <b>danger</b> alert—check it out!
    </Alert>

    <Alert variant="warning">
        This is a <b>warning</b> alert—check it out!
    </Alert>

    <Alert variant="info">
        This is a <b>info</b> alert—check it out!
    </Alert>

    <Alert variant="light">
        This is a <b>light</b> alert—check it out!
    </Alert>

    <Alert variant="dark">
        This is a <b>dark</b> alert—check it out!
    </Alert>
```

## Link color {#link-color}

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.

```jsx
<Alert variant="primary">
  A simple primary alert with <Alert.Link href="#">an example link</Alert.Link>.
  Give it a click if you like.
</Alert>
```

## Additional content {#additional-content}

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

```jsx
<Alert variant="success">
  <Alert.Heading>Well done!</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
```

## Icons {#icons}

Similarly, you can use `flexbox utilities` and `Bootstrap Icons` to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.

```jsx
<Alert variant="primary">
  <IconWarning /> An example alert with an icon.
</Alert>
```

## Dismissing {#dismissing}

Add the dismissible prop to add a functioning dismiss button to the Alert.

```react-fc

```

You can also control the visual state directly which is great if you want to build more complicated alerts.

```react-fc

```

# API {#api}

## AlertHeading {#alert-heading}

## AlertLink {#alert-link}

::paging{prev="/#accordion" prevTitle="Accordion" next="/#badges" prevTitle="Badges"}
