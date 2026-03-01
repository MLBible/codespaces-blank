---
q_id: "svm-kernel-trick"
topic: "classical-ml"
subtopic: "svm"
question: "What is the Kernel Trick in SVM?"
---

The **Kernel Trick** allows us to map data into a high-dimensional feature space without explicitly calculating the coordinates of the data in that space.

It computes the inner product:
$$K(x, y) = \phi(x)^T \phi(y)$$

This makes it computationally efficient to find a linear classifier in a non-linear space.