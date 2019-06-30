---
bibliography: paper.bib
csl: test/ieee.csl
---

# pandoc-doi2bib

This Pandoc filter allows you to put references using the DOI id any article with the form \@DOI:XXX.XXX/XXXXXXX and updates the bibliography *.bib file indicated in the YAML metadata accordingly.

Example paper.md:

<pre>
---
bibliography: paper.bib
csl: test/ieee.csl
---

# Introduction

Just cite some nice papers like @DOI:10.1007/s10462-018-09676-2
or @DOI:10.1155/2014/497514.

</pre>

Run the command:

~~~sh
pandoc --filter pandoc-doi2bib --filter pandoc-citeproc -s README.md -o README.pdf
~~~

and the results an automatic citation like:

Just cite some nice papers like [1] or [2].

# References

[1] F. Fausto, A. Reyna-Orta, E. Cuevas, Ángel G. Andrade, and M. Perez-Cisneros, “From ants to whales: Metaheuristics for all tastes,” Artificial Intelligence Review, Jan. 2019.

[2] E. Cuevas and A. Reyna-Orta, “A cuckoo search algorithm for multimodal optimization,” The Scientific World Journal, vol. 2014, pp. 1–20, 2014.
