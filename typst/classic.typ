// Option A: Classic Academic. Serif, centered masthead, letterspaced caps
// headings over hairline rules. Conservative and print-first.
#import "common.typ": *

#let ink = rgb("#1b1d21")
#let t = (
  accent: rgb("#1c66bd"),
  muted: rgb("#5b5f66"),
  sub: it => block(above: 0.9em, below: 0.4em, text(style: "italic", it)),
)

#set document(title: "Pete Benbow — Curriculum Vitae", author: "Pete Benbow")
#set page(paper: "us-letter", margin: 0.85in, numbering: "1", number-align: right,
  footer: context if counter(page).get().first() > 1 [
    #set text(size: 8.5pt, fill: t.muted)
    Pete Benbow — CV #h(1fr) #counter(page).display()
  ])
#set text(font: "Source Serif 4", size: 10.5pt, fill: ink)
#set par(leading: 0.6em)
#set list(indent: 0.6em, marker: [–], spacing: 0.45em)

#show heading.where(level: 1): it => block(above: 1.6em, below: 0.7em, width: 100%)[
  #text(size: 10pt, weight: "semibold", tracking: 0.14em, upper(it.body))
  #v(-0.55em)
  #line(length: 100%, stroke: 0.5pt + ink)
]

#align(center)[
  #text(size: 26pt, weight: "semibold", tracking: 0.01em, cv.name)
  #v(0.1em)
  #text(size: 11pt, style: "italic")[#cv.headline \ #cv.institution]
  #v(0.2em)
  #text(size: 9.5pt, website-link(t))
]

= Education
#education(t)
= Academic Appointments
#experience(t, cv.appointments)
= Teaching
#teaching(t)
= Service
#service(t)
= Scholarship & Professional Activity
#scholarship(t)
= Prior Professional Experience
#experience(t, cv.priorExperience)
= Honors & Awards
#honors(t)
= Skills
#skills(t)
