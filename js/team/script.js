const persons = [
  {
    name: "Ahmed Habib",
    photo: "img/team/habib.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Badruddoza Kaif",
    photo: "img/team/kaif.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },


  {
    name: "Abdullah Al Mahmud",
    photo: "img/team/abdullah.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Ayman Chowdhury",
    photo: "img/team/ayman.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "HM Junayed Al Mubasshir",
    photo: "img/team/junayed.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Alina Mahzabin Ruhama",
    photo: "img/team/ruhama.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Saif Al Nahian",
    photo: "img/team/saif.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Fahad Shahriar",
    photo: "img/team/fahad.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Arifa Shobnom",
    photo: "img/team/blank.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Ahmed Farhan",
    photo: "img/team/farhan.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Nafis Akbar",
    photo: "img/team/nafis.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  {
    name: "Sami HC",
    photo: "img/team/blank.jpg",
    title: "position",
    bio:
      "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet architecto ea blanditiis quo labore esse magnam illum ut quibusdam. Corrupti ratione iure aliquam adipisci! Harum vitae laboriosam temporibus illo suscipit?</p>",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },

  
];

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      inlineStyles: null,
      isReady: false,
      isOk: false,
      selectedPersonData: {
        name: null,
        title: null,
        photo: null,
        social: {
          facebook: null,
          twitter: null,
          linkedin: null
        }
      }
    };
  },
  methods: {
    selectPerson(index, el) {
      if (!this.isOk) {
        this.selectedPersonIndex = index;
        this.isSelected = true;
        el.target.parentElement.className == "person-details"
          ? (this.selectedPerson = el.target.parentElement.parentElement)
          : (this.selectedPerson = el.target.parentElement);

        this.selectedPerson.classList.add("person-selected");
        this.selectedPerson.setAttribute(
          "style",
          `width:${this.selectedPerson.offsetWidth}px;`
        );
        this.selectedPersonData = this.persons[index];
        window.setTimeout(() => {
          this.inlineStyles = `width:${this.selectedPerson
            .offsetWidth}px;height:${this.selectedPerson
            .offsetHeight}px;left:${this.selectedPerson.offsetLeft}px;top:${this
            .selectedPerson.offsetTop}px;position:fixed`;
          this.selectedPerson.setAttribute("style", this.inlineStyles);
        }, 400);
        window.setTimeout(() => {
          this.isReady = true;
          this.isOk = true;
        }, 420);
      } else {
        this.reset();
      }
    },
    reset() {
      this.isReady = false;
      window.setTimeout(() => {
        this.selectedPerson.classList.add("person-back");
      }, 280);
      window.setTimeout(() => {
        this.selectedPerson.setAttribute("style", "");
      }, 340);
      window.setTimeout(() => {
        this.isSelected = false;
        this.selectedPerson.classList.remove("person-back", "person-selected");
        this.isOk = false;
      }, 400);
    }
  }
});