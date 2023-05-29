## Migrating from 0.9x to 0.10x

- Ensure your using Node V16+
- In the dependent project `.storybook/preview.js` change
```
import '@pexeso/ui-core/dist/ui-core.css'
```
to

```
import '@pexeso/ui-core/ui-core.css'
import '@pexeso/ui-core/next/ui-core-next.css'
```

- In the dependent project change

```
import '@pexeso/ui-core/dist/ui-core.css'
```

to

```
import '@pexeso/ui-core/ui-core.css'
import '@pexeso/ui-core/next/ui-core-next.css'
```
