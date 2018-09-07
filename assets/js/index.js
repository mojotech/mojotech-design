import { carouselController, carouselProgress } from "./_carousel.js";
import { scrollController, fadeController } from "./_scroller.js";
import { headerController } from "./_header.js";
import { onReady } from "./_helpers.js";

onReady(() => {
  scrollController();
  carouselController();
  carouselProgress();
  headerController();
  fadeController();
});
