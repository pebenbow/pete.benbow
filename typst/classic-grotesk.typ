// Option E: Classic + Grotesk. Serif body text like Classic, but the name
// and section headings use the website's Space Grotesk, left-aligned, with
// a short blue rule instead of a full-width line.
#import "common.typ": *

#let ink = rgb("#1b1d21")
#let accent = rgb("#2780e3")
#let t = (
  accent: rgb("#1c66bd"),
  muted: rgb("#5b5f66"),
  subsection: it => text(font: "Space Grotesk", size: 11.5pt, weight: "semibold", fill: rgb("#1c66bd"), it),
  sub: it => block(above: 1em, below: 0.4em, text(font: "Space Grotesk", weight: "semibold", size: 0.95em, it)),
)

#set document(title: "Pete Benbow — Curriculum Vitae", author: "Pete Benbow")
#set page(paper: "us-letter", margin: 0.85in,
  footer: context if counter(page).get().first() > 1 [
    #set text(font: "Space Grotesk", size: 8pt, fill: t.muted, tracking: 0.04em)
    PETE BENBOW · CURRICULUM VITAE #h(1fr) #counter(page).display()
  ])
#set text(font: "Source Serif 4", size: 10.5pt, fill: ink)
#set par(leading: 0.6em)
#set list(indent: 0.6em, marker: text(fill: accent)[•], spacing: 0.45em)

#show heading.where(level: 1): it => block(above: 1.8em, below: 0.8em, sticky: true)[
  #text(font: "Space Grotesk", size: 10pt, weight: "bold", tracking: 0.12em, upper(it.body))
  #v(-0.5em)
  #box(width: 1.6em, height: 2pt, fill: accent)
]

#grid(
  columns: (1fr, auto),
  align: (left + bottom, right + bottom),
  [
    #text(font: "Space Grotesk", size: 26pt, weight: "bold", tracking: -0.01em, cv.name)
    #v(-0.55em)
    #text(size: 11pt, style: "italic", fill: t.muted)[#cv.headline \ #cv.institution]
  ],
  text(size: 9.5pt, align(right, website-link(t))),
)
#v(0.2em)
#line(length: 100%, stroke: 0.5pt + rgb("#c4c7cc"))

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
