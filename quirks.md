## Code in title

Can't have backtick in section header
'## \`Expo.Video\`' -> ## Expo.Video

## Curly braces anywhere in text

Can't have curly brace without inlinecode element
'{}' -> ${<InlineCode>{`{}`}</InlineCode>}

## Snacks

Replace snacks with SnackEmbed components
'randomsnackid123' -> ${<SnackEmbed snackId="randomsnackid123" />}

# Gifs and images

Replace gifs or images with Image component
