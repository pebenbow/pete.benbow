// Shared CV content. Each layout passes a theme dictionary and decides
// where/how sections and headings appear; this file only renders the
// content of each section from cv.json (exported from src/data/*.ts).
//
// Theme keys:
//   accent: color      used for the website link and highlights
//   muted:  color      dates, notes, secondary text
//   sub:    function   renders a sub-heading (e.g. "Classroom")
//   dated:  function   (body, date) -> content; how a line with a date looks

#let cv = json("cv.json")

#let default-dated(t) = (body, date) => grid(
  columns: (1fr, auto),
  column-gutter: 1.2em,
  body,
  if date != none { text(fill: t.muted, date) },
)

#let dated(t, body, date) = {
  let f = t.at("dated", default: default-dated(t))
  f(body, date)
}

#let bullets(items) = list(..items.map(i => [#i]))

#let education(t) = for e in cv.education {
  dated(t, [*#e.degree*, #e.institution], e.year)
}

// orgs: cv.appointments or cv.priorExperience
#let experience(t, orgs) = for org in orgs {
  block(above: 1em, below: 0.5em, text(weight: "bold", size: 1.05em, org.name))
  for role in org.roles {
    block(above: 0.85em, below: 0.35em, dated(t, emph(role.title), role.at("dates", default: none)))
    if "bullets" in role { bullets(role.bullets) }
  }
}

#let teaching(t) = {
  (t.sub)[Classroom]
  bullets(cv.teaching.classroom)
  (t.sub)[Independent Study]
  bullets(cv.teaching.independent)
  (t.sub)[Online (edX)]
  bullets(cv.teaching.online)
  (t.sub)[Advising & Mentoring]
  bullets(cv.teaching.mentoring)
}

#let software(t) = list(..cv.software.map(p => [
  *#p.name* --- #p.description#if "role" in p [ #text(fill: t.muted, style: "italic")[(#p.role)]]
]))

// Each talk is a bullet; its venue/date lines sit indented beneath it.
#let conferences(t) = list(spacing: 0.9em, ..cv.conferences.map(c => [
  #c.title#if "note" in c [ #text(fill: t.muted)[(#c.note)]]
  #for p in c.presentations {
    block(above: 0.4em, below: 0.4em, inset: (left: 1em), dated(t, p.venue, p.date))
  }
]))

#let service(t) = {
  (t.sub)[College]
  bullets(cv.service.college)
  (t.sub)[Professional]
  bullets(cv.service.professional)
  (t.sub)[Alumni]
  bullets(cv.service.alumni)
}
#let honors(t) = bullets(cv.honors)

// Inline "Category: a · b · c" rows.
#let skills(t) = for g in cv.skills {
  block(above: 0.45em, below: 0.45em)[
    *#g.category:* #g.items.join([ #text(fill: t.muted)[·] ])
  ]
}

// Stacked "Category" then items, for narrow columns.
#let skills-stacked(t) = for g in cv.skills {
  block(above: 0.9em, below: 0.3em, text(weight: "semibold", size: 0.95em, g.category))
  text(size: 0.9em, g.items.join(", "))
}

// The PDF is often printed, so it carries no links except the website.
#let website-link(t) = link("https://" + cv.website, text(fill: t.accent, cv.website))

// Software Development + Conference Presentations under one heading.
// Subsections get their own, stronger style (a "subsection" theme key, with
// a default here) so they clearly outrank the bold item titles beneath them,
// plus extra space above the second one to mark where the first ends.
#let subsection(t, it, first: false) = {
  let style = t.at("subsection", default: it => text(size: 11.5pt, weight: "semibold", fill: t.accent, it))
  block(above: if first { 0.5em } else { 2em }, below: 0.7em, sticky: true, style(it))
}

#let scholarship(t) = {
  subsection(t, first: true)[Software Development]
  software(t)
  subsection(t)[Conference Presentations]
  conferences(t)
}
